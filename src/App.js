import React from 'react';
import Navbar from './components/navbar/Navbar';
import { Route, Switch  } from 'react-router-dom';
import Index from './components/index/Index';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Index} />
        <Route  path='/contact' component={Contact} />
      </Switch>
      
    </div>
  );
}

export default App;
