import React, { useEffect } from 'react';
import Header from "./Header" ;
import './App.css';
import Sidebar from './Sidebar';
import EmailList from "./EmailList" ;
import SendMail from "./SendMail" ;
import Mail from "./Mail" ;
import Login from "./Login" ;
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux" ;
import {selectSendMessageIsOpen} from "./features/mailSlice" ;
import { selectUser , login } from './features/userSlice';
import { auth } from './firebase';

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser) ;
  const dispatch = useDispatch() ;
  useEffect( () => {
    auth.onAuthStateChanged(user => {
      if(user){
        // the user is logged in
        dispatch(login({
          displayName: user.displayName ,
          email: user.email ,
          photoUrl: user.photoURL

        }))
      }
      else{

      }
    })
  } , [])

  return (
    <Router>

    {!user ? <Login /> : (

    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />

        <Switch>
          <Route path="/mail" > <Mail /> </Route>
          <Route path="/"> <EmailList /> </Route>
        </Switch>

      </div>
      
    { sendMessageIsOpen && <SendMail /> }
    </div>
    )}
    </Router>
  );
}

export default App;
