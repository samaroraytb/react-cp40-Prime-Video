import {Component} from 'react'
import MoviesSlider from '../MoviesSlider'
import './index.css'

class PrimeVideo extends Component {
  render() {
    const {moviesList} = this.props

    const actionMovies = moviesList.filter(
      eachItem => eachItem.categoryId === 'ACTION',
    )

    const comedyMovies = moviesList.filter(
      eachItem => eachItem.categoryId === 'COMEDY',
    )

    return (
      <div className="main-body-container">
        <img
          className="prime-image-main"
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
        />
        <div className="action-movie-container">
          <h1 className="movies-heading">Action Movies</h1>
          <MoviesSlider moviesList={actionMovies} />

          <h1 className="movies-heading">Comedy Movies</h1>
          <MoviesSlider moviesList={comedyMovies} />
        </div>
      </div>
    )
  }
}

export default PrimeVideo
