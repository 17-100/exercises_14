function Todo({todo, index, remove}) {
    function handle() {
        remove(index);
    }
    return <div onClick={handle} className="todo">{todo.text} (-)</div>
}
