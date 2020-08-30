import React, { Component } from 'react';
import './App.css';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Header from './components/Header'
import Main from './components/Main'
import {  Route} from 'react-router-dom';
import NewPost from './components/NewPost';
import Login from './components/Login';

  
 

class App extends Component 
{
constructor(props){
  super(props);
  this.state={
    mode:'read',
  customers:'',
    completed:0,
    searchKeyword:''
  }
  this.stateRefresh=this.stateRefresh.bind(this);
  this.handleValueChange=this.handleValueChange.bind(this)
}

stateRefresh=()=>{
  this.setState({
    customers:'',
    completed:0
  });
  this.callApi()
  .then(res => this.setState({customers:res}))
  .catch(err => console.log(err));
}

componentDidMount(){
  this.timer =setInterval(this.progress, 20);
  this.callApi()
  .then(res => this.setState({customers:res}))
  .catch(err => console.log(err));
  
}
componentWillUnmount() {
  clearInterval(this.timer);
  }


  
callApi= async() => {
  const response = await fetch('/api/customers');
  const body = await response.json();
  return body;
}

progress=() => {
  const{completed} =this.state;
  this.setState({completed: completed >=100 ? 0 : completed+1});
}

handleValueChange=(e)=>{
  let nextState={};
  nextState[e.target.name]=e.target.value;
  this.setState(nextState);
}

render() {
  
  return (
   <div> 
    <Header classes='this.props'
    onChangePage={function(){
    }.bind(this)}> </Header>
 
 <div>
     <Route exact path='/'> <Main 
      customers={this.state.customers}
      completed={this.state.completed}
      searchKeyword={this.state.searchKeyword}
      ></Main>   </Route>

      <Route path="/NewPost"><NewPost stateRefresh={this.stateRefresh} ></NewPost></Route>
      <Route path="/Login"><Login></Login></Route>

  </div>
    </div>
  );
  }
  }
export default App;
