import { applyMiddleware, createStore } from 'redux';
import { createNavigationEnabledStore } from '@expo/ex-navigation';
import { persistStore, autoRehydrate } from 'redux-persist';
import thunk from 'redux-thunk';
import reducer from '../reducers/index';
import { AsyncStorage } from 'react-native';
import devTools from 'remote-redux-devtools';

const isDebuggingInChrome = true;

const createStoreWithNavigation = createNavigationEnabledStore({
    createStore,
    navigationStateKey: 'navigation',
});

const createMyStore = applyMiddleware(thunk)(createStoreWithNavigation);

export default (onComplete: ?() => void) => {
    let store;
    if (isDebuggingInChrome) {
        store = autoRehydrate()(createMyStore)(reducer, devTools());
        if (module.hot) {
            // Enable hot module replacement for reducers
            module.hot.accept(() => {
                const nextRootReducer = require('../reducers').default;
                store.replaceReducer(nextRootReducer);
            });
        }
    } else {
        store = autoRehydrate()(createMyStore)(reducer);
    }

    persistStore(store, { storage: AsyncStorage }, onComplete);
    if (isDebuggingInChrome) {
        window.store = store;
    }
    return store;
};