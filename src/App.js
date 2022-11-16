import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateTodo from "./components/create-todo.component";
import TodosList from "./components/todos-list.component";
import EditTodo from "./components/edit-todo.component";
import Logo from "./to-do-list.png"

class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand" href="https://codingthesmartway.com" target="blank">
                <img src={Logo} width="30" height="30" alt="todo app logo" />
              </a>
              <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                  <li className="navbar-item">
                    <Link to="/" className="nav-link">Todos</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/create" className="nav-link">Create Todo</Link>
                  </li>
                </ul>
              </div>
            </nav>
            <Routes>
              <Route path="/" element={<TodosList/>} />
              <Route path="/edit/:id" element={<EditTodo/>} />
              <Route path="/create" element={<CreateTodo/>} />
          
            </Routes>
          
        </Router>
</div>
    );
  }
}

export default App;
