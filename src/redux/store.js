import { configureStore } from '@reduxjs/toolkit';
import jobListReducer from './jobList/jobListSlice';
import jobDetailReducer from './jobDetail/jobDetailSlice';
// import authReducer from './auth/authSlice';

const store = configureStore({
  reducer: {
    // auth: authReducer,
    jobList: jobListReducer,
    jobDetail: jobDetailReducer,
  },
});

export default store;
