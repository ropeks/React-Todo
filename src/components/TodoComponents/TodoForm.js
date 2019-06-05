import React from 'react';

export default class TodoForm extends React.Component {
    render() {
        return (
            <>
                <input type="text" value={this.props.task} onChange={this.props.changeHandler}></input>
                <button onClick={this.props.add}>Add</button>
                <button onClick={this.props.clear}>Clear</button>
            </>
        );
    }
}