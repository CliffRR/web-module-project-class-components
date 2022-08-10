import React from 'react'
import TodoList from "./TodoList"
import Form from "./Form"


const initialState = {
  tasks: [{todos: 'Walk my fish', id: 'abc', completed: true}],
  choreInput: '',
  error: 'No error currently',
}

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = initialState
  }

  clearCompleted = () => {
    const updatedTasks = this.state?.tasks?.filter(task => {
      return !task.completed
    }) 
    this.setState({...this.state, tasks:updatedTasks})
  }


  toggleCompleted = (id) => {
    const updatedTasks = this.state?.tasks?.map(task => {
      if(task.id === id){
        task.completed = !task.completed
      }
      return task
    }) 
    this.setState({...this.state, tasks:updatedTasks})
  }

  uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }

  onError = err => {
    const errorFromAPI = err.response.data.message
    this.setState({...this.state, error: errorFromAPI})
  }

  onSubmit = () => {
    const payloadToSend = { todos: this.state.choreInput, id: this.uuidv4(), completed: false }
    this.setState({...this.state, tasks: this.state.tasks.concat(payloadToSend)})
  }
  
  onChange = (id, value) => {
    this.setState({...this.state, [id]: value})
  }

  render() {
    return (
      <div>
        <h1>Todos</h1>
        <TodoList           
          tasks = {this.state.tasks}
          toggleCompleted = {this.toggleCompleted}
        />

        <Form           
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          choreInput={this.state.choreInput}
          clearCompleted = {this.clearCompleted}
          />

        {/* <ul>
          {
            this.state.tasks.map(qo => (
              <li key={qo.id}>
                {qo.todos}
              </li>
            ))
          }
        </ul> */}
      </div>
    )
  }
}
