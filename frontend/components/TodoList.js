import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {

  

  render() {
    return (
      <div>
        {this.props.tasks.map(qo => {
          return <Todo key = {qo.id} 
          todos = {qo.todos} 
          completed = {qo.completed} 
          toggleCompleted = {() => this.props.toggleCompleted(qo.id)}
          />
        })}
      </div>
    )
  }
}
