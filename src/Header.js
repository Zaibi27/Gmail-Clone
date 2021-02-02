import React from 'react' ;
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import "./Header.css" ;
import { Avatar, IconButton } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {selectUser , logout} from "./features/userSlice" ; 
import { useSelector , useDispatch } from 'react-redux';
import {auth} from "./firebase" ;

function Header() {
    const user = useSelector(selectUser) ;
    const dispatch = useDispatch() ;

    const signOut = () => {
        auth.signOut()
        .then(() => {
            dispatch(logout()) ;
        })
    }

    return (
        <div className="header">
            <div className="header__left">
            
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img src="https://cdn.vox-cdn.com/thumbor/Tbqi3ZF9Qz0fTJIUvkgQe3FdN0k=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg" />
            </div>

            <div className="header__middle">
                <SearchIcon />
                <input type="text" placeholder="Search mail" />
                <ArrowDropDownIcon className="inputCaret" />

            </div>

            <div className="header__right">
                <IconButton>
                    <AppsIcon />
                </IconButton>

                <IconButton>
                    <NotificationsIcon />
                </IconButton>

                <Avatar src={user.photoUrl} onClick={signOut} />
            </div>
        </div>
    )
}

export default Header
