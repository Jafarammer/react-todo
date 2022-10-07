import React from "react";
// component
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [todo, setTodo] = React.useState("");
  const [item, setItem] = React.useState([]);

  const addItem = () => {
    if (!todo) {
      alert("Please enter item");
      return;
    }
    const items = {
      id: Math.floor(Math.random() * 500),
      value: todo,
    };

    setItem((data) => [...data, items]);
    setTodo("");
  };

  const deleteItem = (id) => {
    const delData = item.filter((data) => data.id != id);
    setItem(delData);
  };

  return (
    <div className="container">
      <div className="row">
        <div
          className="col-6 d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <div
            className="card shadow p-3"
            style={{ width: "18rem", height: "12rem" }}
          >
            <h3 className="mb-3 text-center text-muted">Input Todo</h3>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter todo"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
            <button className="btn btn-primary" onClick={() => addItem()}>
              Add
            </button>
          </div>
        </div>
        <div className="col-6  d-flex  flex-column justify-content-center">
          <h3 className="mb-3 text-muted">Show Todo</h3>
          <ul class="list-group" style={{ width: 400 }}>
            {item.map((dataTodo) => (
              <li key={dataTodo.id} className="list-group-item">
                {dataTodo.value}{" "}
                <button
                  className="btn btn-sm btn-danger float-end"
                  onClick={() => deleteItem(dataTodo.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
