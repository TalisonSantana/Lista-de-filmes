import React, { Component } from 'react';
import './Filmes.css';
import { Link } from 'react-router-dom'

class Filmes extends Component {

  render() {
    const { title, poster_path } = this.props;

    return (
      <nav>
        <ul className="container" >
          <li >
            <Link to={title}>
              <h3>{title}</h3>
              <img src={poster_path} alt={title} />
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Filmes;
