import React from 'react';
import './Todo.css';

export default class Todo extends React.Component {
    render() {
        return (
            <div id={this.props.id}>{this.props.task}</div>
        );
    }
}