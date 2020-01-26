import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";

import {List} from "../../atoms/List";
import {TodoItem} from "../../atoms/TodoItem";

//////////////////////////////////////////SAGA VS THUNK
import {thunkGetTodos} from "../../../Redux/Actions/Todo";
import {sagaGetTodos} from "../../../Redux/Actions/Todo";
////////////////////////////////////////   Временная страничка загрузки
const LoadingPage = () => <div>Loading</div>;
////////////////////////////////////////

export const Home = () => {
    const list = useSelector((state) => state.Todo);
    const loading = useSelector((state) => state.TodoLoading);
    const error = useSelector(state => state.TodoError);

    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch(thunkGetTodos())
        dispatch(sagaGetTodos())
    }, [dispatch]);

    const View = loading ? <LoadingPage/> : <List list={list} renderItem={TodoItem}/>;
    return (error) ? new Error() : View
};
