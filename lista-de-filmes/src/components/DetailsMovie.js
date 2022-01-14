import React from 'react';
import './DetailsMovie.css'
import { Link } from 'react-router-dom'

class DetailsMovie extends React.Component {


  render() {
    const { match: { params: { slug } }, charact } = this.props
    const result = charact.find((resultado) => resultado.title === slug);
    return (
      <div>
        {result &&
          <div>
            <aside>
              <Link to="/" >back to homepage</Link>
            </aside>
            <div className="container-finish">
              <section className="img-details">
                <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${result.poster_path}`} alt={result.title} />
              </section>
              <section className='details-movie'>
                <h1> {result.title} </h1>
                <p> Release date: {result.release_date}  </p>
                <p> Language: {result.original_language}</p>
                <p>vote average: {result.vote_average}%</p>
                <p> <h3>Overview:</h3>{result.overview}</p>
              </section>
            </div>
          </div>
        }
      </div>

    )
  }
}

export default DetailsMovie;