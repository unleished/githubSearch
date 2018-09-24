import React, {Component} from 'react';
import FavItem from './FavItem.jsx'

class Favorites extends Component {


  removeFav = name => {
    this.props.removeFavorite(name)
  }

  render() {

    const favoritesArray = this.props.favorites
    console.log('favoritesArray: ', favoritesArray)

    const favList = favoritesArray.map((fav) =>
    <FavItem
      key={fav.key}
      fullName={fav.fullName}
      language={fav.language}
      urlTag={fav.tags_url}
      removeFav={this.removeFav}
      />);

      console.log('favorites: ', this.props.favorites);


    return (

          <tbody>
            {favList}
          </tbody>

    );
  }
}
export default Favorites;
