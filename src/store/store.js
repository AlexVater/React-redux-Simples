import {createStore, combineReducers} from "redux";
import numerosReducer from "./reducers/numerosReducer";

const reducers = combineReducers({
    numeros: numerosReducer,
})

function store() {
    return createStore(reducers)
}

export default store
