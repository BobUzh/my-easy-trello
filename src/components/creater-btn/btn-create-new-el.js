import React, { Component } from 'react';
import { Link } from "react-router-dom";

class BtnCreateNewElement extends Component {

    render() {

        const style = {
            height: '100px',
            boxShadow: 'inset 0 0 7px #000000',
            borderRadius: '2px',
            justifyContent: 'center',
        }

        return(
            <div className="valign-wrapper white" style={style}>
                <Link to='#' className={"btn "+this.props.color}
                        onClick={this.props.addNewEl}>
                    <i className="material-icons">add</i>{ !this.props.isAddNewEl ? this.props.title : 'cancel'}
                </Link>
            </div>
        )
    }
}

export default BtnCreateNewElement;