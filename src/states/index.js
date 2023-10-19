import { configureStore } from "@reduxjs/toolkit";
import { loadingBarReducer } from "react-redux-loading-bar";
import authUserReducer from "./authUser/reducer";
import isPreloadReducer from "./isPreload/reducer";
import talkDetailReducer from "./talkDetail/reducer";
import talksReducer from "./talks/reducer";
import usersReducer from "./users/reducer";

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    talks: talksReducer,
    talkDetail: talkDetailReducer,
    users: usersReducer,
    loadingBar: loadingBarReducer
  },
});

export default store;
