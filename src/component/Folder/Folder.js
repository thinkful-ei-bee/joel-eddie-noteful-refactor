import React from 'react';
import FolderList from '../folderlist/folderlist';
import NoteList from '../notelist/notelist';

export default class Folder extends React.Component {
  render() {

    const folderId = this.props.match.params.folderId;
    
    return (
      <main role="main" className="App">
      <section className="main-layout">
      <div className="left-menu">
        <FolderList folders={this.props.folders} selected={folderId}/>
      </div>
      <div className="right-content">
        <NoteList notes={this.props.notes.filter(note => note.folderId === folderId)} />
      </div>
      </section>
      </main>
    )

  }
}