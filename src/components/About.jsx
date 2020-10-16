import React, { Component } from 'react'
import { connect } from 'react-redux'

export class About extends Component {

    render() {
        
        const id = this.props.match.params.id;

        const movie = Array.from(this.props.movieList).find(movie => movie.imdbID === id);
 
        return (
            <div className="col-xs-4">
            <div className="panel panel-info">
              <div className="panel-heading">
              <img src={movie.Poster} alt="Presentation" />
                <h3 className="panel-title">{movie.Title}</h3>
                <h4 className="panel-title>">Year: {movie.Year}</h4>
                <h4 className="panel-title>">Rated: {movie.Rated}</h4>
                <h4 className="panel-title>">Released: {movie.Released}</h4>
                <h4 className="panel-title>">Runtime: {movie.Runtime}</h4>
                <h4 className="panel-title>">Genre: {movie.Genre}</h4>
                <h4 className="panel-title>">Director: {movie.Director}</h4>
                <h4 className="panel-title>">Writer: {movie.Writer}</h4>
                <h4 className="panel-title>">Actors: {movie.Actors}</h4>
                <h4 className="panel-title>">Plot: {movie.Plot}</h4>
                <h4 className="panel-title>">Language: {movie.Language}</h4>
                <h4 className="panel-title>">Awards: {movie.Awards}</h4>
                <h4 className="panel-title>">Metascore: {movie.Metascore}</h4>
                <h4 className="panel-title>">imdbRating: {movie.imdbRating}</h4>
                <h4 className="panel-title>">Production: {movie.Production}</h4>
                <h4 className="panel-title>">Average: {movie.Average}</h4>
                
              </div>
              <div className="panel-body">
                
              </div>
            </div>
          </div>
        )
    }
 
}

const mapStateToProps = (state) => ({
    movieList: state.movieReducer.result
})
 

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(About)
