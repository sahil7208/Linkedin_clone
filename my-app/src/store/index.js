import {configureStore, applyMiddleware} from '@reduxjs/toolkit';
import rootReducer from "../reducers";
import thunk from 'redux-thunk';
// import thunkMiddleware from "redux-thunk";

  export const  store = configureStore ({
    reducer: rootReducer,
    middleware: [thunk]
  });
  // store.dispatch(action);
