import React, {Component} from 'react';

class Search extends Component {
  
  handleSubmit = event => {
    event.preventDefault();
      const query = event.target.elements.query.value
      console.log("query: ", query)
      this.createQuery(query)
      event.target.elements.query.value = ''
  }

  createQuery = query => {
    const name = 'in:name'
    const apiCall = `https://api.github.com/search/repositories?q=${query}+${name}&sort=stars&order=desc`
    this.props.getApi(apiCall)
    // this.setState({query: apiCall})
  }


  render() {

    return (
      <div className="search">
        <form className="form-inline searchbar" onSubmit={this.handleSubmit}>
          <input type='text' name="query" className="form-control col-md" placeholder="Shopify" />
          <input type="submit" className="form-control searchbtn" value="Search"/>


        </form>
      </div>

    );
  }
}
export default Search;
