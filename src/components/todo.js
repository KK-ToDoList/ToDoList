function Todo(props) {
    return (
      <div className="todo" key={props.todo.id}>
        <h3>
          <label
            className={props.todo.completed ? "completed" : null} // completed가 0이 아닐 때
            onClick={props.handleClick}
          >
            {props.todo.todoName} {/* 각 todo의 이름을 출력 */}
          </label>
          <label onClick={props.handleDelete}>&nbsp;&nbsp;&nbsp;❌</label>
        </h3>
      </div>
    );
  }
  
  export default Todo;
  