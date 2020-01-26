const initialState = [];

export function TodoError(state = false, action) {
    switch (action.type) {
        case 'TODO_ERROR':
            return action.hasErrored;
        default:
            return state
    }
}

export function TodoLoading(state = false, action) {
    switch (action.type) {
        case 'TODO_LOADING':
            return action.isLoading;
        default:
            return state
    }
}

export function Todo(state = initialState, action) {
    switch (action.type) {
        case 'TODO_SUCCESS':
            return action.todos;
        default:
            return state;
    }
}