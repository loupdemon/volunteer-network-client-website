import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import EventRegistration from './components/EventRegistration/EventRegistration';
import Login from './components/Login/Login';
import SelectedEvent from './components/SelectedEvent/SelectedEvent';
import Admin from './components/Admin/Admin';
import AddEvent from './components/AddEvent/AddEvent';

function App() {
  return (
    <Router>
      <Switch>

        <Route path="/home">
          <Home></Home>
        </Route>

        <Route path="/eventRegistration">
          <EventRegistration />
        </Route>

        <Route path="/login">
          <Login></Login>
        </Route>

        <Route path="/selectedEvent">
          <SelectedEvent></SelectedEvent>
        </Route>

        <Route path="/admin">
          <Admin></Admin>
        </Route>

        <Route path="/addEvent">
          <AddEvent></AddEvent>
        </Route>

        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route exact path="*">
          <NotFound></NotFound>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
