import React, { Component } from 'react';
import ArtistCard from './components/artist-card';
import SearchBar from './components/search-bar';
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <SearchBar />
        <div className="container">
          <div className="row">
            <ArtistCard
              img="https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/0/5/8/9/5370-39a8-46bf-a6d1-f0142493de1f"
              titulo="Iron Maiden"
            />
            <ArtistCard
              img="http://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Dream_Theater_-_Images_and_Words.jpg/300px-Dream_Theater_-_Images_and_Words.jpg"
              titulo="Dream Theater"
            />

            <ArtistCard
              img="https://pm1.narvii.com/6623/d40cf0fdbdf590e70671f636cf288e5dfde3a3c8_hq.jpg"
              titulo="Amon Amarth"
            />
            <ArtistCard
              img="https://i.pinimg.com/originals/e6/be/e8/e6bee83663da557008a339f8eb2cc441.jpg"
              titulo="Slipknot"
            />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default App;
