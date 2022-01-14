import React from 'react';

class Rotas extends React.Component {

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
    return (
        <h1>
          Rotas
        </h1>
    )
  }
}

export default Rotas;
