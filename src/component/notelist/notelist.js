import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class NoteList extends Component {

  render() {
    return (

      // "id": "cbc787a0-ffaf-11e8-8eb2-f2801f1b9fd1",
      // "name": "Dogs",
      // "modified": "2019-01-03T00:00:00.000Z",
      // "folderId": "b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",
      // "content": "Blah blah blah ..."
      
      <>
        <ul className="notes-list">
          {this.props.notes.map(note =>
            <li key={note.id}>
              <Link to={`/notes/${note.id}`}>
                {note.name}
              </Link>
              <p>Date modified: {note.modified}</p>
              <input 
                className="favorite styled"
                type="button"
                value="Delete note" /> 
            </li>  
          )}
        </ul>
      </>
    );
  }
}
