function App() {
    // the initial state is an array of objects
    const [todos, setTodos] = React.useState([
        {
            text: 'learn react',
            isCompleted: false
        },
        {
            text: 'meet friend for lunch',
            isCompleted: false
        },
        {
            text: 'build todo app',
            isCompleted: false
        }
    ]);

    const addTodo = text => {
        const newTodos = [...todos, {text:text, isCompleted: false}];
        setTodos(newTodos);
    }


    const removeTodo = e => {
        const index = Number(e.target.id);
        let temp = [...todos]
        temp.splice(index, 1)
        setTodos(temp);
    }

    // returns our jsx
    return (<>
        {todos.map((todo, i) => 
            <div key={i} id={i} onClick={removeTodo} className="todo">{todo.text}</div>)}
        <TodoForm addTodo = {addTodo}/>
    </>);
}


ReactDOM.render(
    <App/>,
    document.getElementById('root')
)