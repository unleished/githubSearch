import React, {Component} from 'react';
import ResultItem from './ResultItem.jsx'

class Results extends Component {

  resultFavorite = obj => {
    this.props.addFav(obj)
  }

  getVersion = (url) => {
    fetch(url)
      .then(d => d.json())
      .then(json => {
        let urlTag = ''
        if (json.length === 0) {
          urlTag = '-'
        } else {
          console.log("results JSON name: ", json[0].name)
          urlTag = json[0].name
        }
      })
  }

  render() {
    console.log('results props tags URL: ', this.props.results)
    const searchResults = this.props.results.map((result) =>
    <ResultItem
      key={result.id}
      fullName={result.full_name}
      language={result.language}
      urlTag={this.getVersion(result.tags_url)}
      url={result.html_url}
      showAdd={this.props.showAdd}
      resultFavorite = {this.resultFavorite}/>);

    return (
          <tbody>
            {searchResults}
          </tbody>
    );
  }
}
export default Results;
