import React from 'react';
import {BrowserRouter as Router, Route, Switch} 
      from 'react-router-dom'
import ListUserComponent from './components/ListUserComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateUserComponent from './components/CreateUserComponent';
import ViewUserComponent from './components/ViewUserComponent';
import Home from './components/Home';

function App() {
  return (
    <div>
       <Router>
              <HeaderComponent />
                    <Switch> 
                          <Route path = "/" exact component =
                              {Home}></Route>
                          <Route path = "/users" component = 
                              {ListUserComponent}></Route>
                          <Route path = "/add-user/:id" component = 
                              {CreateUserComponent}></Route>
                          <Route path = "/view-user/:id" component = 
                              {ViewUserComponent}></Route>
                    </Switch>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
