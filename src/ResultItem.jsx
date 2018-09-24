import React, {Component} from 'react';

class ResultItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAdd: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = evt => {
    this.newFav();
    this.setState({ showAdd: false })
  }

  newFav = () => {
    const favItem = {
      fullName: this.props.fullName,
      language: this.props.language,
      tag: this.props.tags_url
    }
    this.props.resultFavorite(favItem)
  }


  render() {
    console.log('URLTag in resultItem: ',this.props.urlTag)
    return (
       <tr>
         <td><a href={this.props.url} target="_blank" >{this.props.fullName}</a></td>
         <td>{this.props.language ? this.props.language : '-'}</td>
         <td>{this.props.urlTag}</td>
         <td className='link' onClick={this.handleClick}>{this.state.showAdd ? 'Add' : ''} </td>
       </tr>

    );
  }
}
export default ResultItem;
