import { SET_USER, SET_LOADING_STATUS, GET_ARTICLES} from '../actions/actionType';
import { auth, googleProvider, storage, db } from './firebase';
import { signInWithPopup } from 'firebase/auth';
import {
  getDownloadURL,
  listAll,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import { serverTimestamp, collection, addDoc, query, orderBy, getDocs } from 'firebase/firestore';


export const setUser = (payload) => ({
  type: SET_USER,
  user: payload,
});

export const setLoading = (status) => ({
  type :SET_LOADING_STATUS ,
  status: status,
});

export const getArticles = (payload) => ({
  type: GET_ARTICLES,
  payload: payload,
});

const signInAPI = () => {
  return (dispatch) => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        dispatch(setUser(result.user));
      })
      .catch((error) => {
        alert(error.message);
      });
  };
};

const getUserAuth = () => {
  return (dispatch) => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(setUser(user));
      }
    });
  };
};

const signOutAPI = () => {
  return (dispatch) => {
    auth
      .signOut()
      .then(() => {
        dispatch(setUser(null));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
};



const postArticleAPI = (payload) => {
  return async (dispatch) => { 
    dispatch(setLoading(true))
    try {
      const articlesCollection = collection(db, 'articles');
      let sharedImg = "";

      if (payload.image) {
        const storageRef = ref(storage, `images/${payload.image.name}`);
        const uploadTask = uploadBytesResumable(storageRef, payload.image);

        uploadTask.on(
          'state_changed',
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(`Progress: ${progress}%`);
            if (snapshot.state === "running") {
              console.log(`Progress: ${progress}%`);
            }
          },
          (error) => console.log(error.code),
          async () => {
            try {
              const downloadURL = await getDownloadURL(storageRef);
              sharedImg = downloadURL;
              console.log('Image available at ', sharedImg);

              await addDoc(articlesCollection, {
                actor: {
                  description: payload.user.email,
                  title: payload.user.displayName,
                  date: serverTimestamp(),
                  image: payload.user.photoURL,
                },
                video: "",
                sharedImg: sharedImg,
                comments: 0,
                description: payload.description,
              });
               dispatch(setLoading(false));

              alert('Article with image posted successfully!');
            } catch (error) {
              alert('Error adding article:' + error.message);
            }
          }
        );
      } else if (payload.video) {
        dispatch(setLoading(true))
        await addDoc(articlesCollection, {
          actor: {
            description: payload.user.email,
            title: payload.user.displayName,
            date: serverTimestamp(),
            image: payload.user.photoURL,
          },
          video: payload.video,
          sharedImg: "",
          comments: 0,
          description: payload.description,
        });
        dispatch(setLoading(false));

        alert('Article with video posted successfully!');
      }
    } catch (error) {
      alert('Error adding article:' + error.message);
    }
  };
};



export function getArticleAPI() {
  return async (dispatch) => {
    try {
      const articlesCollection = collection(db, 'articles');
      const q = query(articlesCollection, orderBy('actor.date', 'desc'));

      const querySnapshot = await getDocs(q);
      const payload = querySnapshot.docs.map((doc) => doc.data());

      dispatch(getArticles(payload));
    } catch (error) {
      alert('Error fetching articles: ' + error.message);
    }
  };
}


export default signInAPI;
export { signOutAPI, getUserAuth, postArticleAPI };
