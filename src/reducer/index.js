import { combineReducers } from 'redux';
import catalogReducer from './catalogReducer';

const rootReducer = combineReducers({
  catalog: catalogReducer,
  // Adicione outros redutores aqui, se necessário
});

export default rootReducer;
