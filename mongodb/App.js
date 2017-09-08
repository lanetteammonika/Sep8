import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducer from './reducer';
import Router from './Router';
import logger from 'redux-logger';
class App extends Component{

    render(){
        return(
            <Provider store={createStore(reducer,{},applyMiddleware(ReduxThunk))}>
                 <Router />
            </Provider>
        );
    }
}//createStore(reducer,{},applyMiddleware(ReduxThunk))
const store = createStore(
    reducer,
    {},
    applyMiddleware(
        ReduxThunk,
        logger
    ),
)
export default App;