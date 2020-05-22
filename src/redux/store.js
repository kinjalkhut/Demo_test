import { createStore } from 'redux'
import rootReducer from './index'
import { applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
    key: 'loginReducer',
    storage: AsyncStorage,
    whitelist: ['loginReducer'] // which reducer want to store
  };

  const pReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(pReducer,applyMiddleware(thunk))
const persistor = persistStore(store);

export default store;