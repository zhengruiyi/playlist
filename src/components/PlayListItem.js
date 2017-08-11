import React, { Component } from 'react'

export default class PlayListItem extends Component {
  render () {
    return (
      <div className='cards-div'>
        {this.props.songs.map((song) =>
          <div className='card card-outline-danger text-center' key={song._id}>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'><strong>User:</strong> {song.userName}</li>
              <li className='list-group-item'><strong>Artist/Band:</strong> {song.songArtist}</li>
              <li className='list-group-item'><strong>Title:</strong> {song.songTitle}</li>
              <li className='list-group-item'><strong>Notes:</strong> {song.songNotes}</li>
            </ul>
          </div>
        )}
      </div>
    )
  }
}
