import { ApiState } from "./ApiState";
import { Todo } from "./Todo";
import { useCreateTodos } from "../api/react-query";
import { useState } from "react";
import { v4 as uuid } from "uuid";

const _TodoApp = ({ todos }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [task, setTask] = useState("");
  const { mutate, isPending } = useCreateTodos();
  return (
    <div className="flex flex-column gap-1">
      <div className="flex gap-1">
        <input value={task} onChange={(e) => setTask(e.target.value)} />
        <button
          disabled={isPending}
          onClick={() => {
            mutate({ task, id: uuid(), done: false });
            setTask("");
          }}
        >
          {isPending ? "loading..." : "Add Todo"}
        </button>
      </div>
      {(todos ?? []).map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          editExistingTodo={editExistingTodo}
          deleteExistingTodo={deleteExistingTodo}
        />
      ))}
    </div>
  );
};

export const TodoApp = ApiState(_TodoApp);
