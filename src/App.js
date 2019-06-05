import React from 'react';
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

const data = [
  { task: "Organize Garage", id: "1528817077286", completed: false },
  { task: "Bake Cookies", id: "1528817084358", completed: false },
  { task: "Clean Room", id: "1528817344358", completed: true }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {
      list: data,
      task: ""
    };
  }
  
  changeHandler = event => {
    this.setState({task: event.target.value});
  };

  add = () => {
    if (this.state.task === '') { 
      alert('Add a task!');
    } else {
      const newTask = {
      id: Date.now().toString(),
      task: this.state.task,
      completed: false
      };

      const newList = this.state.list.concat(newTask);

      this.setState({
        list: newList,
        task: ""
      });
    }
  }

  clear = () => {
    let newList = this.state.list.filter(task => !task.completed);
    this.setState({list: newList});
  };

  render() {
    return (
      <div>
        <h2>My Todo List:</h2>
        <TodoList list={this.state.list} />
        <TodoForm task={this.state.task} changeHandler={this.changeHandler} add={this.add} clear={this.clear} />
      </div>
    );
  }
}

export default App;
