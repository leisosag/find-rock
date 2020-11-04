import React, { Component } from "react";
import SearchBar from "./components/search-bar.js";
import SearchResults from "./components/search-results.js";

class PageSearchResult extends Component {
  state = { busqueda: "" };

  componentDidMount() {
    let search = this.props.history.location.search
      .substr(1)
      .replace("%20", " ");

    this.setState({
      busqueda: search,
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <React.Fragment>
        <SearchBar
          onChange={this.handleChange}
          busqueda={this.state.busqueda}
        />
        <SearchResults busqueda={this.state.busqueda} />
      </React.Fragment>
    );
  }
}

export default PageSearchResult;
