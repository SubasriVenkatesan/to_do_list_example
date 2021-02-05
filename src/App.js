import React, {Component} from 'react';
import './App.css'
import ListItems from './List_item';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      items:[],
      currentItem:{
        text:'',
        key:''
      }
    }
    this.handleInput =this.handleInput.bind(this);
    this.addItem =this.addItem.bind(this);
  }

  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now()
      }
    })

  }

  addItem(e){
    e.preventDefault();
    const newItem=this.state.currentItem;
    if(newItem.text!==""){
      const newItems = [...this.state.items ,newItem];
      this.setState({
        items:newItems,
        currentItem:{
          text:"",
          key:""
        }
      })
    }
  }

  render(){
    return(
      <div className="app">
        <header>
          <form id = "to-do-list" onSubmit={this.addItem}>
            <input className ="input" value = {this.state.currentItem.text} onChange={this.handleInput} type="text" placeholder = "enter the text" />
            
            <button type="submit" >Add</button>
          </form>
        </header>
        <ListItems items={this.state.items}></ListItems>
      </div>
    );
  }
}

export default App;
