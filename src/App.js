import React, { Component } from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { cleanAll } from './actions';
import Header from './components/header';
import BoardsListContainer from './components/boards';
import BoardItem from './components/board-item';

import Service from './services/service';


class App extends Component {

service = new Service();

cleanLocalStorage() {
    // this.service.initialLocalStorage();
    this.service.cleanAll();
    this.props.cleanAll();

}
  render(){
    
    return (
        <React.Fragment>
            <Link to='/my-easy-trello/' className="waves-effect waves-light btn"
                  style={{position: 'absolute', top: 0, left: 0}}
                  onClick={ () => this.cleanLocalStorage() }>clean all
            </Link>
            <div className="App">
                <Header/>

                <Switch>
                    <Route path="/my-easy-trello/" exact component={ BoardsListContainer } />
                    <Route path="/my-easy-trello/board/:id" component={ BoardItem } />
                    {/* <Redirect to='/' /> */}
                </Switch>
            </div>
        </React.Fragment>
    );
  }
}

export default connect( null, { cleanAll } )(App);
