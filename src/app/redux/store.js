import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistStore } from "redux-persist";
import userSliceData from "./feature/userSlice";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
} from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import productSlice from "./feature/productSlice";

const persistConfig = {
  key: "dummynextapp",
  storage,
};

const rootReducer = combineReducers({
  user: userSliceData,
  products: productSlice
  
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
