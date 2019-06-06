import React from "react";
import Todo from "./Todo";

export default class TodoList extends React.Component {
  render() {
    return (
      <div>
        {this.props.list.map(i => {
          return <Todo key={i.id} id={i.id} task={i.task} onClick={this.props.done} />;
        })}
      </div>
    );
  }
}