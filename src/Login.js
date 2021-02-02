import { Button } from '@material-ui/core';
import React from 'react' ;
import {auth , provider} from "./firebase" ;
import {login , loadingStart , loadingStop , selectLoading} from "./features/userSlice" ;
import "./Login.css" ;
import { useDispatch , useSelector } from 'react-redux';
import {Oval} from '@agney/react-loading';


function Login() {
    const loading = useSelector(selectLoading) ;
    const dispatch = useDispatch() ;
    const signIn = () => {
        dispatch(loadingStart())
        auth.signInWithPopup(provider)
       .then(({user}) => {
            
            dispatch(login({
                displayName: user.displayName ,
                email: user.email ,
                photoUrl: user.photoURL
            })) ;
            dispatch(loadingStop()) ;
        })
        .catch((error) => alert(error.message)) ;

       
    }
    return (
        <div className="login">
            <div className="login__container">
                <img alt="" src="https://cdn.vox-cdn.com/thumbor/Tbqi3ZF9Qz0fTJIUvkgQe3FdN0k=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg"/>
                
                <Button onClick={signIn} color="primary" variant="contained" >Login By Gmail</Button>
             {loading && <Oval className="loader"/> }
                

            </div>
        </div>
    )
}

export default Login 
