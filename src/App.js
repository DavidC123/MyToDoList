import React, { Component } from "react";
import './App.css'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      newItem: '',
      list: []
    }
  }

  updateItem(input) {
    this.setState({
      newItem: input
    })
  }

  addItem() {
    const newItem = {
      id: Date.now(),
      value: this.state.newItem.slice(),
    }

    let tempList = this.state.list

    if (newItem.value !== '') {
      tempList.push(newItem)
    }

    this.setState({
      newItem: '',
      list: tempList
    })
  }

  deleteItem(id) {
    let tempList = this.state.list

    let tempList2 = tempList.filter((item) => item.id !== id)

    this.setState({
      list: tempList2
    })
  }



  render() {
    return (
      <div>

        <h1 className='title'>My To-do List</h1>

        <div className='search'>
          <input className='in' placeholder="Enter an item to add to list" type='text' value={this.state.newItem} onChange={(e) => this.updateItem(e.target.value)} Enter a new item to add to list />
          <button className='addBtn' onClick={() => this.addItem()}>ADD ITEM</button>
        </div>
        <ul className='list'>
          {this.state.list.map((listItem) =>
            <li>
              {listItem.value}
              <button className='delete' onClick={() => this.deleteItem(listItem.id)}>Delete item</button>
            </li>)}
        </ul>

      </div>
    )
  }
}

export default App;


