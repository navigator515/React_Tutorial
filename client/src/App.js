import React, { Component } from 'react';
import './App.css';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Header from './components/Header'
import Main from './components/Main'
import {  Route} from 'react-router-dom';
import NewPost from './components/NewPost';
import Login from './components/Login';
const styles = theme => ({
  root: {
  width: "100%",
  minWidth: 1080
  },
  menu: {
  marginTop: 15,
  marginBottom: 15,
  display: 'flex',
  justifyContent: 'center'
  },
  paper: {
  marginLeft: 18,
  marginRight: 18
  },
  progress: {
  margin: theme.spacing.unit * 2
  },
  grow: {
  flexGrow: 1,
  },
  tableHead: {
  fontSize: '1.0rem'
  },
  menuButton: {
  marginLeft: -12,
  marginRight: 20,
  },
  title: {
  display: 'none',
  [theme.breakpoints.up('sm')]: {
  display: 'block',
  },
  },
  search: {
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: fade(theme.palette.common.white, 0.15),
  '&:hover': {
  backgroundColor: fade(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
  marginLeft: theme.spacing.unit,
  width: 'auto',
  },
  },
  searchIcon: {
  width: theme.spacing.unit * 9,
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  },
  inputRoot: {
  color: 'inherit',
  width: '100%',
  },
  inputInput: {
  paddingTop: theme.spacing.unit,
  paddingRight: theme.spacing.unit,
  paddingBottom: theme.spacing.unit,
  paddingLeft: theme.spacing.unit * 10,
  transition: theme.transitions.create('width'),
  width: '100%',
  [theme.breakpoints.up('sm')]: {
  width: 120,
  '&:focus': {
  width: 200,
  },
  },
  }
  });
  
 

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
