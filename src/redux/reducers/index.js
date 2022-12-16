import {combineReducers} from 'redux';
import {ProductReducer} from "../reducers/ProductReducer";

const reducers = combineReducers({
    allProcucts:ProductReducer,
})
export default reducers;