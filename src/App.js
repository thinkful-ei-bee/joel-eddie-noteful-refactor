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
  handleDeleteNote(id) {
    console.log(id);
    // delete noteId from api via getStuff()

    // delete noteId from state, this calls re-render
    let filtered = this.state.notes.filter(note => note.id !== id.noteId)
    console.log(filtered);
    this.setState({ notes: filtered });
  }
  render() {
    return (
    
      <NoteContext.Provider 
        value={{
          folders: this.state.folders,
          notes: this.state.notes,
          handleDeleteNote: noteId => this.handleDeleteNote({noteId}),
        }}
      >

        <Header />
        <Route exact path="/" component={ HomePage } />
        <Route exact path="/folder/:folderId" component={ Folder } />
        <Route exact path="/notes/:noteId" component={ Note } />
        
      </NoteContext.Provider>
      
    );
  }
}

export default App;
