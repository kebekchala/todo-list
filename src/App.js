import React from 'react';
import Container from './components/Container';
import Header from './components/Header';
import './App.css';
import './components/components.css';
import Todo from './components/Todo';

const App = () => {
  return (
    <div className="App">
      <Container>
        <Header title={'#todo'}/>
        <Todo/>
      </Container>
    </div>
  );
};

export default App;