import React, { Component } from 'react';
import logo from './logo.svg';
import Customer from './components/Customer' 
import './App.css';
import { render } from '@testing-library/react';


const customers=[{
  'id':'1',
  'image':'http://placeimg.com/64/64/any',
  'name':'홍길동',
  'birthday':'950515',
  'gender':'male',
  'job':'학생'
},
{
  'id':'2',
  'image':'http://placeimg.com/64/64/any',
  'name':'권한길',
  'birthday':'950515',
  'gender':'male',
  'job':'학생'
},
{
  'id':'3',
  'image':'http://placeimg.com/64/64/any',
  'name':'박세준',
  'birthday':'950515',
  'gender':'male',
  'job':'학생'
}


]

class App extends Component 
{
  render(){
  return (
    <div>
 {
   customers.map(c=>{
     return(
       <Customer
       key={c.id}
       image={c.image}
       name={c.name}
       birthday={c.birthday}
       gender={c.gender}
       job={c.job}
      />
     )
   })
 }
  </div>
  );
}
}
export default App;
