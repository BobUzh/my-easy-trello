import React from "react";
import Task from "../task";
import {connect } from "react-redux";
import { addNewTask, setActiveNoteList } from "../../actions";

const Note = ({ data, addNewTask, setActiveNoteList })=> {

    const taskList = data.task.map( (task) => <Task task={ task.text } key={ task.id } />);

    const inputValue = (e) => {

        if (e.key == 'Enter') {
            addNewTask( e.target.value, data.name, data.parentName );
            e.target.value = '';
        }
    }

    const activeNoteList = () => {
        setActiveNoteList( data );
    }

    return (
        <div className="col s12 m4"
             onClick={ activeNoteList }>
            <div className="collection card-panel ">
                <h5 className="center collection-item blue-grey-text darken-4"
                    style={ {fontFamily: 'Modak'} } >{ data.name }</h5>
                <input type="text" className=" z-depth-4" placeholder="task "
                       onKeyDown={ inputValue }/>
                { taskList }
            </div>
        </div>
    )
}

export default connect( null, { addNewTask, setActiveNoteList })( Note );