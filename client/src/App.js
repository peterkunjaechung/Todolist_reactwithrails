import React, { Component, } from 'react';
import axios from "axios";
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { Container, } from "semantic-ui-react";

class App extends Component {
  state = { todos: [
  ], };

  componentDidMount() {
    // TODO make a call to our rails server to get Items
    axios.get("/api.items")
    .then( res => {
      this.setState({ todos: res.data, });
    })
    .catch( err => {
      console.log(err);
    })
  }

  addItem = (name) => {
    // TODO make api call to rails server to add item
    // TODO update state
    axios.post('/api/items', { name })
    .then( res => {
      const { todos, } = this.state;
      this.setState({ todos: [...this.state.todos, res.data], });
    })
  }

  updateTodo = (id) => {
    // TODO make api call to update todo
    // TODO update state
    axios.put(`/api/items/${id}`)
    .then( res => {
      const todos = this.state.todos.map( t => {
      if (t.id === id)
        return res.data;
      return t;
    });
    this.setState({ todos, });
  })
  }

  deleteTodo = (id) => {
    // TODO make api call to delete todo
    // TODO remove it from state
    axios.delete(`/api/items/${id}`)
    .then( res => {
      const { todos, } = this.state;
      this.setState({ todos: todos.filter(t => t.id !== id), })
    })
  }

  render() {
    return (
      <Container style={{ padding: "30px 0", }}>
        <TodoForm addItem={this.addItem} />
        <br />
        <br />
        <TodoList
          todos={this.state.todos}
          updateTodo={this.updateTodo}
          deleteTodo={this.deleteTodo}
        />
      </Container>
    );
  }
}

export default App;

