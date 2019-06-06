import React from 'react';
import './Todo.css';

export default class Todo extends React.Component {
    render() {
        return (
            <div 
                className={`task ${this.props.completed === true ? 'done' : ''}`} 
                id={this.props.id}
            >
                {this.props.task}
            </div>
        );
    }
}