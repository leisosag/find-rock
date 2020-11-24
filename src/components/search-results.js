import React, { Component } from "react";
import ArtistCard from "./artist-card.js";
import Loading from "./loading.js";
import Error from "./error.js";

class SearchResults extends Component {
  state = {
    loading: false,
    error: null,
    errorMensaje: null,
    data: {
      similarartists: {
        artist: [],
      },
    },
  };

  componentWillReceiveProps(e) {
    let termino = e.busqueda;

    const key = "dff8e6342ad2b6efb4b815551f72b6bb";
    this.fetchAPI(
      `https://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=${termino}&api_key=${key}&format=json`
    );
  }

  fetchAPI = async (url) => {
    this.setState({
      loading: true,
    });

    try {
      const respuesta = await fetch(url);
      const data = await respuesta.json();
      if (data.error) {
        this.setState({
          loading: false,
          error: true,
          errorMensaje: data.message,
        });
      } else {
        this.setState({
          data: data,
          loading: false,
          error: false,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.state.loading && <Loading />}
        {this.state.error && (
          <Error errorMensaje={this.state.errorMensaje}></Error>
        )}

        <div className="container">
          <div className="row">
            {this.state.data.similarartists.artist.map((artist, i) => {
              return (
                <ArtistCard
                  img={artist.image[2]["#text"]}
                  titulo={artist.name}
                  key={i}
                />
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchResults;
