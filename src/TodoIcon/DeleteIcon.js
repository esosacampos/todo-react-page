import React from 'react';
import {TodoIcon} from './'
import './TodoIcon.css'

function DeleteIcon({ onDelete }){
    return (<TodoIcon type="delete" color="gray" onClick={onDelete} />)
}

export {DeleteIcon};