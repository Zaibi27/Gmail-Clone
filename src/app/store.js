import { configureStore } from '@reduxjs/toolkit';
import mailReducer from '../features/mailSlice';
import userReducer from '../features/userSlice';
import { loadingBarMiddleware } from 'react-redux-loading-bar'

export default configureStore({
  reducer: {
    mail: mailReducer,
    user : userReducer ,

  } ,
});
