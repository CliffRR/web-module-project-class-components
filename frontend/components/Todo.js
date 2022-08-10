import React from 'react'

export default class Todo extends React.Component {
  render() {
    return (
      <button onClick = {this.props.toggleCompleted}>
        {`${this.props.todos}  ${this.props.completed? "✔️" : ""}`} 
      </button>
    )
  }
}
