import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import NoteContext from './context/NoteContext';
import Header from './component/header/header';
import HomePage from './component/homepage/homepage';
import Folder from './component/Folder/Folder';
import Note from './component/Note/Note';

class App extends Component {
  state = {
    folders: [],
    notes: [],
  }
  componentDidMount() {
    this.getStuff('folders');
    this.getStuff('notes');
  }
  getStuff(endpoint, method = 'GET') {
    fetch(`http://localhost:9090/${endpoint}`, {
      method: method,
      headers: {
        'content-type': 'application/json'
      },
    })
    .then(response => response.json())
    .then(response => {
      //console.log(response);
      this.setState( {[endpoint]: response} );
    })
  }
  render() {
    return (
    
      <NoteContext.Provider 
        value={{
          folders: this.state.folders,
          notes: this.state.notes,
          match: this.props.match
        }}
      >

        <Header />
        <Route exact path="/" component={ HomePage } />
        <Route exact path="/folder/:folderId"
          render={ (props) => <Folder match={props.match} />
          } 
        />
        <Route exact path="/notes/:noteId"
          render={ (props) => <Note folders={this.state.folders} notes={this.state.notes} match={props.match} /> }
        />
        
      </NoteContext.Provider>
      
    );
  }
}

export default App;
