import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName]=useState('');

  const onChange = (event) => {
    setName(event.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Home</h1>
        <p>당신의 이름은 무엇입니까?</p>
        <input onChange={onChange} type="text" name="" value={name}/>
        <h3>반갑습니다. {name}님</h3>
      </header>
    </div>
  );
}

export default App;
