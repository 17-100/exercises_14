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
    // returns our jsx
    return (<>
        {todos.map((todo, i) => 
            <div key={i} className="todo">{todo.text}</div>)}
    </>);
}


ReactDOM.render(
    <App/>,
    document.getElementById('root')
)