import React from 'react';
import './App.css';
import Customer from './components/Customer';

const customers = [
{
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '이풍호',
  'birthday' : '930402',
  'gender' : '남자',
  'job' : '치킨집사장'
},
{
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : '조은별',
  'birthday' : '941109',
  'gender' : '여자',
  'job' : 'CEO'
},
{
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/3',
  'name' : '김대연',
  'birthday' : '940826',
  'gender' : '남자',
  'job' : '제빵사'
}
]

function App() {
  return (
    <div>
      {customers.map(c => { return (<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} ob={c.job}/>)})}
    </div>
  );
}

export default App;
