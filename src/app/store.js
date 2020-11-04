import { configureStore } from '@reduxjs/toolkit';
import userProfilesReducer from './reducer';

export default configureStore({
  reducer: {
    user: userProfilesReducer,
  },
});
