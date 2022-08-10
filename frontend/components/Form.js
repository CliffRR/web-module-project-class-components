import React from 'react'

export default class Form extends React.Component {

  onSubmit = evt => {
    evt.preventDefault()
    this.props.onSubmit()
  }

  onChange = evt => {
    const {value, id } = evt.target
    this.props.onChange(id, value)
    console.log(id, value)
  }


  render() {
    return (
      <div>
        <form onSubmit = {this.onSubmit}>
          <input 
          type = "text"
          id = "choreInput"
          placeholder = "enter to dos"
          value = {this.props.choreInput}
          onChange = {this.onChange}
          />
          <input type = "submit" />
        </form>
<button onClick = {this.props.clearCompleted}>
  Hide Completed
</button>
      </div>


    )
  }
}
