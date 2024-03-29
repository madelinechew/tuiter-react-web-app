import React from "react";
import HelloReduxExampleComponent from "./hello-redux-example-component";
import hello from "./reducers/hello";
//import { createStore } from "redux";
import todos from "./reducers/todos-reducer";
import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit'; 
import Todos from "./todos-component";

//const store = createStore(hello);
const store = configureStore({
    reducer: {hello, todos}
   });
   
   const ReduxExamples = () => {
    return(
      <Provider store={store}>
        <div>
          <h2>Redux Examples</h2>
          <Todos/>
          <HelloReduxExampleComponent/>
        </div>
      </Provider>
    );
   };
   export default ReduxExamples;