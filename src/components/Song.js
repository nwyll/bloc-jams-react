import React, { Component } from 'react';

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
      buttonStyle = (<span className="ion-play"></span>);
    }
    return (
      <tr className="song" key={this.props.index}
        onMouseEnter={() => this.handleMouseHover()}
        onMouseLeave={() => this.handleMouseHover()} >
        <td className="song-actions">
          <button>
            {buttonStyle}
          </button>
        </td>
        <td className="song-title">{this.props.song.title}</td>
        <td className="song-duration">{this.props.song.duration}</td>
      </tr>
    );
  }
}

export default Song;
