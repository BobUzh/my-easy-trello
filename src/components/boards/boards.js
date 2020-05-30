import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators} from "redux";

import Service from '../../services/service';
import { boardsLoaded, addNewBoard, showInputForTitle } from '../../actions';
import Card from '../card';
import BtnCreateNewElement from "../creater-btn";
import InputTitle from "../input-title";
import './boards.css';

const BoardsList = ( {boards} ) => {
    return boards.map( (board) => {
        return (
            <div className="col s3 mb-2" key={ board.id } >
                <Link to={`board/${board.id}`} >
                    <div className="board teal lighten-2 valign-wrapper" >
                        <Card title={ board.title } />
                    </div>
                </Link>
            </div>
        )
    })
}

class BoardsListContainer extends Component {

    service = new Service();

    componentDidMount(){

        if( !this.props.boardsCollection.length ){
            const boards = this.service.getAllBoards();
            this.props.boardsLoaded( boards );
        }
    }

    showInputTitle = () => {
        this.props.showInputForTitle( );
    }

    addNewBoard = ( title )=> {
        if ( title.trim() != '') {
            this.props.addNewBoard( title );
        }
    }

    render() {

        const { boardsCollection, isAddNewEl } = this.props;

        const inputTitle =  ( <div className="col s3 mb-2">
                                <div className="board valign-wrapper">
                                    <InputTitle setTitle={ this.addNewBoard } />
                                </div>
                            </div> )


        return (
            <div className="container" style={ {height: '80vh'} } >
                <div className="row">
                    <div className="col s3">
                        <BtnCreateNewElement title={ 'new board' }
                                             showInputTitle={ this.showInputTitle }
                                             isAddNewEl={ isAddNewEl } />
                    </div>
                    <BoardsList boards={ boardsCollection } />
                    { isAddNewEl && inputTitle }
                </div>
            </div>
        )
    }
}

const  mapStateToProps = ( { boardsCollection, isAddNewEl } ) => {
    return { boardsCollection, isAddNewEl };
}

const mapDispatchToProps = ( dispatch ) => {
    return bindActionCreators({
        boardsLoaded,
        addNewBoard,
        showInputForTitle
    }, dispatch )
}

export default connect( mapStateToProps, mapDispatchToProps )( BoardsListContainer );
