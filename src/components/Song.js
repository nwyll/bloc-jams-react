import React, { Component } from 'react';
import '../styles/song.css';
import Ionicon from 'react-ionicons';

class Song extends Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);

    this.state = {
      isHovering: false
    };
  }

  handleMouseHover () {
    this.setState({isHovering: !this.state.isHovering});
  }

  render () {
    let buttonStyle = (<span className="song-number">{this.props.index + 1}</span>);
    if(this.state.isHovering) {
      buttonStyle = (<Ionicon icon="play" />);
    }
    return (
      <tr className="song"
        key={this.props.index}
        onMouseEnter={() => this.handleMouseHover()}
        onMouseLeave={() => this.handleMouseHover()}
        onClick={this.props.handleSongClick}
        >
        <td className="song-actions">
          <button className="song-button">
            {buttonStyle}
          </button>
        </td>
        <td className="song-title">{this.props.song.title}</td>
        <td className="song-duration">{this.props.formatTime(this.props.song.duration)}</td>
      </tr>
    );
  }
}

export default Song;
