function TodoList({todo}) {
    return (
        <>
        <ul>
            {todo.map((todo) => (
                <li key={todo}>{todo}</li>
            ))}
        </ul>
        </>
    );
}

export default TodoList;