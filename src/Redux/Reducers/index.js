import {combineReducers} from "redux";
import {TodoLoading, TodoError, Todo} from "./Todo";

export const rootReducer = combineReducers({
    TodoLoading, TodoError, Todo
});
