import React, {Component} from 'react';

class FavItem extends Component {

  removeFav = evt => {
    console.log('removefct evt target: ', evt.target.favremove)

    var name = this.props.key
    console.log('removefct name: ', name)
    this.props.removeFav(evt.target)
  }

  render() {
    console.log("fav props: ", this.props)
    return (

       <tr>
         <td name={this.props.key}>{this.props.fullName}</td>
         <td>{this.props.language ? this.props.language: '-'}</td>
         <td>{this.props.urlTag ? this.props.urlTag : '-'}</td>
         <td className='link' name="favremove" onClick={this.removeFav}>Remove </td>
       </tr>

    );
  }
}
export default FavItem;
