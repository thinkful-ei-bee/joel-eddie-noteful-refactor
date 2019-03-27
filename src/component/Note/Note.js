import React from 'react';
import FolderList from '../folderlist/folderlist';
import NoteList from '../notelist/notelist';

export default class Note extends React.Component {
  render() {

    const noteId = this.props.match.params.noteId;

    const note = this.props.notes.find(note => note.id === noteId);

    //const folderId = note.folderId;
    
    // id": "cbc787a0-ffaf-11e8-8eb2-f2801f1b9fd1",
    // "name": "Dogs",
    // "modified": "2019-01-03T00:00:00.000Z",
    // "folderId": "b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",
    // "content":

    return (
      <main role="main" className="App">
      <section className="main-layout">
      <div className="left-menu">
        <FolderList goBack folders={this.props.folders.filter(folder => folder.id === note.folderId)} selected={note.folderId}/>
      </div>
      <div className="right-content">
        
        <ul className="notes-list">
          
            <li key={note.id}>
              <h3>{note.name}</h3>
              <p>Date modified: {note.modified}</p>
              <input 
                className="favorite styled"
                type="button"
                value="Delete note" /> 
            </li>  
            <li>
              <p>
                {note.content}
              </p>
            </li>
          
        </ul>

      </div>
      </section>
      </main>
    )

  }
}