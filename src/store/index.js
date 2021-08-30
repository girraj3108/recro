import {createStore, applyMiddleware, compose} from "redux";
import rootReducer from "../reducer";
import createSagaMiddleware from 'redux-saga';
import { all } from "redux-saga/effects";
import postListSaga from "../redux/posts/saga";

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
    yield all([...postListSaga])
}

const configureStore = () => {
    const store = createStore(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__
            ? compose(
                  applyMiddleware(sagaMiddleware),
                  window.__REDUX_DEVTOOLS_EXTENSION__(),
              )
            : applyMiddleware(sagaMiddleware),
    );
    sagaMiddleware.run(rootSaga);
    return store;
};

export default configureStore;