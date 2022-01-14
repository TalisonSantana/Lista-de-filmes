import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home'
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
    const { filmes } = this.state
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/:slug"
            render={(propRoute) => (<DetailsMovie {...propRoute} charact={filmes} />)} />
          <Route path="*" component={NotFound} />

        </Switch>
      </div>
    )
  }
}

export default Rotas;
