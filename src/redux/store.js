import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import { watchFetchData } from "./sagas";

// import counterReducer from "./slice/counterSlice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(watchFetchData);

// export default configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });
