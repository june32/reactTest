import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

class Movie extends Component {

  static propTypes = {
    title : React.PropTypes.string.isRequired,
    poster : React.PropTypes.string.isRequired
  }

  render() {
    return (
      <div>
        <MoviePoster poster={this.props.poster}/>
        <h1>{this.props.title}</h1>
      </div>
    );
  } 
}

class MoviePoster extends Component{

  static propTypes = {
    poster : React.PropTypes.string.isRequired
  }

  render() {
    return(
      <img src={this.props.poster} alt="Movie Poster"/>
    );
  }
}

export default Movie;
