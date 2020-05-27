import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import Service from '../../services/service'
import { setActiveBoard, boardsLoaded, dataBoardLoaded, showInputForTitle, addNewNote } from '../../actions';

import Spinner from '../spiner';
import BtnCreateNewElement from "../creater-btn/btn-create-new-el";
import Note from "../note/note";
import InputTitle from "../input-title";

class BoardItem extends Component {

    service = new Service();

    componentDidMount() {
        const { match, setActiveBoard, dataBoardLoaded } = this.props;

        const boards = this.service.getAllBoards();
        const activeBoard = boards.find((e) => e.id == match.params.id);

        if ( !activeBoard) {
            this.props.history.push('/my-easy-trello/');
        } else {
            setActiveBoard( activeBoard );
            const dataItemBoard = this.service.getDataBoard( activeBoard.title );
            dataBoardLoaded( dataItemBoard );
        }

    }

    showInputTitle = () => {
        this.props.showInputForTitle( );
    }

    addNewList = ( title ) => {
        this.props.addNewNote( title, this.props.activeBoard.title );
    }


    render() {
        const { activeBoardData, activeBoard, isAddNewEl } = this.props;

        const notesList = activeBoardData.notesList
            ? activeBoardData.notesList.map( ( note ) => {
                return <Note  data={ note } key={ note.id }/>
                })
            : null

        const inputTitle = !isAddNewEl
            ? null
            : ( <div className="col s12 m3">
                <div className="collection card-panel ">
                    <InputTitle setTitle={ this.addNewList }/>
                </div>
            </div> )


    return(
        <div className="container teal" style={ {height: '80vh'} } >
            <div className="row">
                <div className="col s3 mt-2 push-s9">
                    <BtnCreateNewElement title={'new list'}
                                         addNewEl={ this.showInputTitle }
                                         isAddNewEl={ isAddNewEl } />
                </div>
                <div className="col s9 center pull-s3" >
                    <h3 className="white py-2 grey-text text-darken-1 mt-2"
                        style={ {height: '100px',textTransform:'uppercase'} } >
                        { activeBoard ? activeBoard.title : <Spinner /> }
                    </h3>
                </div>
            </div>
            <div className="row">
                { notesList }
                { inputTitle }
            </div>
        </div>
    )
}
}

const mapStateToProps = ( { activeBoard, boardsCollection, activeBoardData, isAddNewEl } ) => {
    return { activeBoard, boardsCollection, activeBoardData, isAddNewEl }
}

const mapDispatchToProps = ( dispatch ) => {
    return bindActionCreators({
        setActiveBoard,
        boardsLoaded,
        dataBoardLoaded,
        showInputForTitle,
        addNewNote
    }, dispatch )
}

export default connect( mapStateToProps, mapDispatchToProps )( withRouter( BoardItem ) );