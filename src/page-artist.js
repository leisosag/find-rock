import React, { Component } from "react";
import SearchBar from "./components/search-bar.js";
import SimilarArtist from "./components/similar-artist.js";
import Loading from "./components/loading.js";
import Error from "./components/error.js";
import "./css/page-artist.css";

class PageArtist extends Component {
  state = {
    busqueda: "",
    data: {
      artist: {
        image: [
          { "#text": "" },
          { "#text": "" },
          { "#text": "" },
          { "#text": "" },
        ],
        bio: {
          summary: "",
        },
        similar: {
          artist: [
            {
              name: "",
              url: "",
              image: [
                { "#text": "" },
                { "#text": "" },
                { "#text": "" },
                { "#text": "" },
              ],
            },
          ],
        },
      },
    },
  };

  componentDidUpdate(prevProps) {
    if (this.props.location != prevProps.location) {
      this.fetchAPI();
    }
  }

  changeHandle = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  componentWillMount(e) {
    this.fetchAPI();
  }

  fetchAPI = async () => {
    let termino = this.props.history.location.search.substr(1);
    const key = "dff8e6342ad2b6efb4b815551f72b6bb";
    let url = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${termino}&api_key=${key}&format=json`;

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
        <SearchBar
          onChange={this.changeHandle}
          busqueda={this.state.busqueda}
        />
        {this.state.loading && <Loading />}
        {this.state.error && (
          <Error errorMensaje={this.state.errorMensaje}></Error>
        )}
        <div className="container">
          <div className="row centrar">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <img
                src={this.state.data.artist.image[3]["#text"]}
                alt=""
                className="pic-artist margenes50"
              />
              <h2>{this.state.data.artist.name}</h2>
              <p>{this.state.data.artist.bio.summary}</p>
            </div>
          </div>
          <div className="row centrar">
            <SimilarArtist data={this.state.data.artist.similar.artist} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PageArtist;
