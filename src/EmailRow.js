import { Checkbox, IconButton } from '@material-ui/core';
import React from 'react' ;
import "./EmailRow.css" ;
import {useHistory} from "react-router-dom" ;
import StarBorderIcon from '@material-ui/icons/StarBorder';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';

import {useDispatch} from "react-redux" ;
import {selectMail} from "./features/mailSlice" ;


function EmailRow({title , subject , description, time , id}) {
    const history = useHistory() ;
    const dispatch = useDispatch() ;

    const openMail = () => {
        dispatch(selectMail({
            title , subject , description, time , id
        })) ;

        history.push("/mail") ;
    }

    
        return (
        <div onClick={openMail} className="emailRow">
            <div className="emailRow__options">
                <Checkbox />
                <IconButton>
                    <StarBorderIcon />
                </IconButton>
                <IconButton>
                    <LabelImportantIcon />
                </IconButton>
            </div>
            <h3 className="emailRow__title">{title}</h3>
            
            <div className="emailRow__message">
                <h4>{subject} {" "}
                <span className="emailRow__description"> -
                    {description}
                </span>
                </h4>
            </div>
            <p className="emailRow__time">{time}</p>
        </div>
    )
}

export default EmailRow
