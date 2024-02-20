import { useState, useEffect } from 'react'
import styled from 'styled-components';
import PostModal from './PostModal';
import ReactPlayer from 'react-player';
import {connect} from 'react-redux';
import { getArticleAPI } from './index';


const Main = (props) => {

const [showModal, setShowModal ] = useState("close");
useEffect(() => {
  props.getArticles();
}, []);
const handleClick = (e) => {
  e.preventDefault();
  if (e.target !== e.currentTarget){
    return;
  }
  switch(showModal){
  case "open":
    setShowModal("close");
    break;
    case "close":
      setShowModal("open");
      break;
      default:
       setShowModal("close");
       break; 
  }
}
    return(
      <>
      {
      props.articles.length === 0 ? (
        <p>There are no articles</p>
      ):
      (
        <Container>
          <ShareBox>
            
          <div>
            {props.user && props.user.photoURL ? (<img src={props.user.photoURL}/>)
            : (<img src="user.svg" alt=""/>)}
            
            
            <button onClick={handleClick} disabled={props.loading ? true : false}> Start a post</button>
            </div> 
            <div>
                <button>
                <i className="fa-regular fa-image photo" ></i>
                <span>Photo</span>
                </button>

                <button>
                <i className="fa-brands fa-youtube video"></i>
                  <span>Video</span>
                </button>

                <button>
                <i className="fa-regular fa-image event" ></i>
                  <span>Event</span>
                </button>

                <button>
                <i className="fa-regular fa-newspaper article"></i>
                  <span>Write article</span>
                </button>
            </div>
            </ShareBox> 
            <Content>
              {props.loading && <i className="fa-solid fa-spinner fa-spin"></i>}
            {props.articles.map((article, key) =>(
           
              <Article key={key}>  
                  <SharedActor>
                    <a>
                    <img src={article.actor.image} alt =""/>
                    <div>
                      <span>{article.actor.title}</span>
                      <span>{article.actor.description}</span>
                      {article.actor.date && article.actor.date.toDate && typeof article.actor.date.toDate === 'function' && (
            <span>{article.actor.date.toDate().toLocaleString()}</span>
          )}
                    </div>
                    </a>
                    <button> 
                    <i className="fa-solid fa-ellipsis"></i>
                    </button>
                  </SharedActor>
                  <Description>{article.description}</Description>
                  <ShareImg>
                    <a>
                   {
                     !article.sharedImg && article.video ? ( <ReactPlayer width={'100%'} url={article.video}/>
                     )
                   :
                   (
                    article.sharedImg && <img src={article.sharedImg}/>
                   )}
                    </a>
                  </ShareImg>
                  <SocialCounts>
                    <li>
                      <button>
                      <i className="fa-solid fa-thumbs-up fa-flip-horizontal"></i>
                      <i className="fa-solid fa-hands-clapping"></i>
                        <span> 75</span>
                      </button>
                    </li>
                    <li>
                      <a>{article.comments}</a>
                    </li>
                  </SocialCounts>
                  <SocialActions>
                  <button >
                  <i class="fa-regular fa-thumbs-up"></i>
                    <span> Like</span>
                  </button>
                  <button>
                  <i className="fa-regular fa-comment-dots"></i>
                    <span>Comments</span>
                  </button>
                  <button>
                  <i className="fa-solid fa-share"></i>
                    <span>Share</span>
                  </button>
                  <button>
                    <i className="fa-solid fa-paper-plane"></i>
                    <span>Send</span>
                  </button>
                  </SocialActions>
              </Article>
))}
              </Content>
            <PostModal showModal={showModal} handleClick={handleClick}/>
        </Container>
       )}
        </>
    )
      
};

const Container = styled.div`
grid-area: main;
`;

const CommonCard = styled.div`
text-align: center;
overflow: hidden;
margin-bottom: 8px;
background-color: #fff;
border-radius: 5px;
position: relative;
border: none;
box-shadow: 0 0 0 1px rgb(0 0 0 / 15% ), 0 0 0 rgb(0 0 0 / 20%);
 `;

 const ShareBox = styled(CommonCard)`
 display: flex;
 flex-direction: column;
 color: #958b7b;
 margin: 0 0 8px;
 background: white;
 div{
  button{
    outline: none;
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
    line-height: 1.5;
    min-height: 48px;
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    font-weight: 600;
  }
  &:first-child{
    display: flex;
    align-items: center;
    padding: 8px 16px 0px 16px;
    img{
      width: 48px;
      border-radius: 50%;
      margin-right: 8px;
    }
    button{
      margin: 4px 0;
      flex-grow: 1;
      border-radius: 35px;
      padding-left: 16px;
      border: 1px solid rgba(0, 0, 0, 0.15);
      border-radius: 35px;
      background-color: white;
      text-align: left;
    }
  }
  &:nth-child(2){
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-bottom: 4px;

    button{
      img{
        margin: 0 4px 0 -2px;
      }
      span{
        color: #70b5f9;
      }
    }
  }
 }
 .photo{
  color: #4550cf;
  font-size: 30px;
  margin: 3px;
 }
 .video{
  color: #4fffa7;
  font-size: 30px;
  margin: 3px;
 }
 .event{
  color: orange;
  font-size: 30px; 
  margin: 3px;
 }
 .article{
  color: red;
  font-size: 30px; 
  margin: 3px;
 }
  `;

  const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
  .fa-comment-dots{
    color: #2492ff;
  }
  .fa-thumbs-up{
    color: #2492ff;
  }
  .fa-share{
    color: #2492ff;
  }
  .fa-paper-plane{
    color: #2492ff;
  }
  `;
  const SharedActor = styled.div`
  padding-right: 40px; 
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-button: 8px;
  align-items: center;
  display: flex;
  a{
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;
    img{
      width : 48px;
      height: 48px;
    }
    & > div{
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;
      span{
        text-align: left;
        &: first-child{
          font-size: 14px;
          font-weight: 700;
          color: rgba(0,0,0,1);
        }
        &: nth-child(n+1){
          font-size: 12px;
          color: rgba(0,0,0,0.6);
        }
      }
    }
  }
  button{
    position: absolute;
    right: 12px;
    top: 0;
    background: transparent;
    border: none;
    outline: none;
  }
  `;
  const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: rgba(0,0,0,0.9);
  font-size: 14x;
  text-align: left;
  `;
  const ShareImg = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f9fafb;
  img{
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;
  const SocialCounts = styled.ul`
  line-height: 1.3;
  display: flex;
  align-items: flex-start;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #e9e5df;
  list-style:none;
  li{
    margin-right: 5px;
    font-size: 12px;
    button{
      display: flex;
      border: none;
      background-color: white;
    }
  }
  .fa-thumbs-up{
    color: blue;
  }
  .fa-hands-clapping{
    color: #2fb12c;
  }
  `;

  const SocialActions = styled.div`
  align-items: center;
  display:flex;
  justify-content: flex-start;
  margin: 0;
  min-height: 40px;
  padding: 4px 8px;
  button{
    display: inline-flex;
    align-items: center;
    padding: 8px;
    color: #0a66c2;
    border: none;
    background-color: white;

    @media(min-width: 768px){
      span{
        margin-left: 8px
      }
    }
  }`;

  const Content = styled.div`
  text-align: center;
  // & > i {
  //   width: 50px;
  // }
  .fa-spinner{
    font-size:30px;
  }`;



  const mapStateToProps = (state) => {
    return{
      loading: state.articleState.loading,
      user: state.userState.user,
      articles: state.articleState.articles,
    };
  };

  const mapDispatchToProps = (dispatch) => ({
    getArticles: () => dispatch(getArticleAPI()),
  });
export default connect(mapStateToProps, mapDispatchToProps)(Main);