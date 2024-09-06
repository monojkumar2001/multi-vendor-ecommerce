import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer"; // Fix the import

const store = configureStore({
  reducer: rootReducer, // Use rootReducer, not rootReducers
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
  devTools: true,
});

export default store;
