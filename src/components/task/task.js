import React from "react";
import { Link } from "react-router-dom";

const Task = ({task})=> {

    const style ={
        borderTopRightRadius:'15px',
        borderBottomLeftRadius: '15px'
    }
    return(
        <Link to={'#'} className="collection-item z-depth-1 my-1" style={ style } >{task}</Link>
    )
}

export default Task;