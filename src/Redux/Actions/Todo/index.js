import {JSON_placeholder_service} from "../../../Services/JSON_placeholder_service";
import {call, put, takeEvery} from 'redux-saga/effects'


function TodoError(bool) {
    return {
        type: 'TODO_ERROR',
        hasErrored: bool
    };
}

function TodoLoading(bool) {
    return {
        type: 'TODO_LOADING',
        isLoading: bool
    };
}

function Todo(todos) {
    return {
        type: 'TODO_SUCCESS',
        todos
    };
}



const jsonService = new JSON_placeholder_service();




////////////////////////////////////////////SAGA

export const sagaGetTodos = () => {
    return {type: 'TODO_SUCCESS_ASYNC'}
};

export function* watchFetchDog() {
    yield takeEvery('TODO_SUCCESS_ASYNC', getTodos);
}

export function* getTodos() {
    try {
        yield put(TodoLoading(true));
        const data = yield call(() => jsonService.getAllTodos());
        yield put(Todo(data));
        yield put(TodoLoading(false));
    } catch (error) {
        yield put(TodoError(true));
    }
}
// export default function* rootSaga() {                         --Для работы сразу с несколькими сагами
//     yield all([
//         helloSaga(),
//         watchIncrementAsync()
//     ])
// }
//////////////////////////////////Thunk

export function thunkGetTodos() {
    return (dispatch) => {
        dispatch(TodoLoading(true));
        jsonService.getAllTodos()
            .then((response) => {
                if (response === false) {
                    throw Error(`Error`);
                }
                return response
            })
            .then(todos => dispatch(Todo(todos)))
            .then(() => dispatch(TodoLoading(false)))
            .catch(() => dispatch(TodoError(true)));
    };
}
