import React, { Component } from 'react';
import Filmes from './Filmes';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filmes: [],
    };
  }

  componentDidMount() {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=35bfdd1779bd8621b05bc97d65eb9bb8')
      .then(response => response.json())
      .then(data => {
        this.setState({ filmes: data.results })
      })
  }

  render() {
    const { filmes } = this.state;
    return (
      <div className="App">
        <header>
          <h1>
            Filmes Mais Polulares:
          </h1>
        </header>
        <main className="body">
          {filmes.map((filme) => {
            return (
              <section key={filme.id}>
                <Filmes
                  title={filme.title}
                  poster_path={`https://www.themoviedb.org/t/p/w220_and_h330_face${filme.poster_path}`}
                />
              </section>

            )
          })}
        </main>

      </div>
    );
  }
}

export default Home;
