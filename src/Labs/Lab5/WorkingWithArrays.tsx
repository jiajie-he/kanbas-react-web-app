import React, { useState } from "react";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function WorkingWithArrays() {
  const API = `${REMOTE_SERVER}/lab5/todos`;
  const [todo, setTodo] = useState({
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09",
    completed: false,
  });

  const [updateId, setUpdateId] = useState("1");
  const [deleteId, setDeleteId] = useState("1");
  const [retrieveId, setRetrieveId] = useState("1");
  const [updateIdDescription, setUpdateIdDescription] = useState("1");
  const [updateIdCompleted, setUpdateIdCompleted] = useState("1");

  return (
    <div id="wd-working-with-arrays">
      <h3>Working with Arrays</h3>
      <h4>Retrieving Arrays</h4>
      <a id="wd-retrieve-todos" className="btn btn-primary" href={API}>
        Get Todos
      </a>
      <hr />

      <h3>Creating new Items in an Array</h3>
      <a
        id="wd-create-todo"
        className="btn btn-primary"
        href={`${API}/create`}
      >
        Create Todo
      </a>
      <hr />

      <h3>Deleting from an Array</h3>
      <a
        id="wd-delete-todo"
        className="btn btn-primary float-end"
        href={`${API}/${deleteId}/delete`}
      >
        Delete Todo with ID = {deleteId}
      </a>
      <input
        value={deleteId}
        className="form-control w-50"
        onChange={(e) => setDeleteId(e.target.value)}
      />
      <hr />

      <h3>Updating an Item in an Array</h3>
      <a
        href={`${API}/${updateId}/title/${todo.title}`}
        className="btn btn-primary float-end"
      >
        Update Todo
      </a>
      <input
        value={updateId}
        className="form-control w-25 float-start me-2"
        onChange={(e) => setUpdateId(e.target.value)}
      />
      <input
        value={todo.title}
        className="form-control w-50 float-start"
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />
      <br /><br /><hr />

      <h3>Updating an Item Completion Status by ID</h3>
      <a
        href={`${API}/${updateIdCompleted}/completed/${todo.completed}`}
        className="btn btn-primary float-end"
        onClick={() => {
          fetch(`${API}/${updateIdCompleted}/completed/${todo.completed}`)
            .then(response => response.json())
            .then(data => {
              // handle success
            })
            .catch(error => {
              // handle error
            });
        }}
      >
        Update Todo Completion Status
      </a>
      <input
        value={updateIdCompleted}
        className="form-control w-25 float-start me-2"
        onChange={(e) => setUpdateIdCompleted(e.target.value)}
      />
      <input
        type="checkbox"
        className="form-check-input float-start me-2"
        id="wd-todo-completed"
        checked={todo.completed}
        onChange={(e) =>
          setTodo({ ...todo, completed: e.target.checked })
        }
      />
      <label className="form-check-label" htmlFor="wd-todo-completed">
        Completed
      </label>

      <br /><br /><hr />

      <h3>Updating an Item Description by ID</h3>
      <a href={`${API}/${updateIdDescription}/description/${todo.description}`} className="btn btn-primary float-end">Update Todo Description</a>
      <input value={updateIdDescription} className="form-control w-25 float-start me-2" onChange={(e) => setUpdateIdDescription(e.target.value)} />
      <input value={todo.description} className="form-control w-50 float-start" onChange={(e) => setTodo({ ...todo, description: e.target.value })} />

      <br /><br /><hr />

      <h4>Retrieving an Item from an Array by ID</h4>
      <a
        id="wd-retrieve-todo-by-id"
        className="btn btn-primary float-end"
        href={`${API}/${retrieveId}`}
      >
        Get Todo by ID
      </a>
      <input
        id="wd-todo-id"
        value={retrieveId}
        className="form-control w-50"
        onChange={(e) => setRetrieveId(e.target.value)}
      />
      <hr />

      <h3>Filtering Array Items</h3>
      <a
        id="wd-retrieve-completed-todos"
        className="btn btn-primary"
        href={`${API}?completed=true`}
      >
        Get Completed Todos
      </a>
      <hr />
    </div>
  );
}
