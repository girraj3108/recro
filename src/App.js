import React from 'react';
import { Provider } from "react-redux";
import PostListContainer from './components/PostListContainer';
import configureStore from "./store";

const store = configureStore();
function App() {
  return (
    <Provider store={store}>
      <PostListContainer/>    
    </Provider>
  );
}

export default App;
