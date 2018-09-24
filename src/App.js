import React, { Component } from 'react';
import './App.css';

import Results from './Results.jsx'
import Favorites from './Favorites.jsx'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      results: [],
      favorites: [],
      isLoaded: false,
      showAdd: 'Add'
    };
  }

  componentDidMount() {

  }

  handleSubmit = event => {
    event.preventDefault();
    if (!event.target.elements.query.value) {
      alert("Seach input cannot be empty")
    } else {
      const query = event.target.elements.query.value
      this.createQuery(query)
      event.target.elements.query.value = ''
    }
  }

  getResults = url => {
    fetch(url)
    .then(data => data.json())
    .then(json => {
        this.setState({
        results: json.items.slice(0, 10),
        })
    });

  }

  createQuery = query => {
    const name = 'in:name'
    const apiURL = `https://api.github.com/search/repositories?q=${query}+${name}&sort=stars&order=desc`
    this.getResults(apiURL)
  }

  addFavorite = (obj) => {
    this.setState({
      favorites: [...this.state.favorites, obj]
    })
  }

  removeFavorite = name => {
    var array = [...this.state.favorites]
    var index = array.indexOf(name)
    console.log('what is my fav array index? ', name)
  }

  render() {
    var { isLoaded, results, query, results } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Github Favorites</h1>
        </header>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="search">
                <form className="form-inline searchbar" onSubmit={this.handleSubmit}>
                  <input type='text' name="query" className="form-control col-md" placeholder="Shopify" />
                  <input type="submit" className="form-control searchbtn" value="Search"/>
                </form>
              </div>
              <div>
                <table className="resultlist">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Language</th>
                      <th>Latest Tag</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                  </tbody>

                    <Results
                      results={this.state.results}
                      addFav={this.addFavorite}
                      getVersion={this.getVersion}
                      showAdd={this.state.showAdd}
                      />

                </table>
              </div>
            </div>
          <div className="col purple">
            <div className="favorites">
              <table className="favoritelist">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Language</th>
                    <th>Latest Tag</th>
                    <th></th>
                  </tr>
                </thead>
                <Favorites favorites={this.state.favorites} removeFavorite={this.removeFavorite}/>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
