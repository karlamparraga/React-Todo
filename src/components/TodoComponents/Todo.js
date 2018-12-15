// import TodoList from "./TodoList";

/*
    <Todo /> is a component that takes in the todo data and 
    displays the task to the screen.
*/

const Todo = props => {
    return (
        <div>{props.task}</div>
    )
}

export default Todo;