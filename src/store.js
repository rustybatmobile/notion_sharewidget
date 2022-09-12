import {createStore, combineReducers} from 'redux';
import groupReducer from './reducers/groupReducer';
import peopleReducer from './reducers/peopleReducer';
import { selectedEntitiesReducer } from './reducers/selectedEntitiesReducer';


const rootReducer = combineReducers({
    groups: groupReducer, 
    people: peopleReducer, 
    selectedEntities: selectedEntitiesReducer
})
const store = createStore(rootReducer);
export default store;

