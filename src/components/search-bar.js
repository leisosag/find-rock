import React, { Component } from "react";
import "../css/search-bar.css";
import logo from "../logo.svg";
import { Link } from "react-router-dom";

class SearchBar extends Component {
  state = { busqueda: "" };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleClick = (e) => {
    e.preventDefault();
  };
  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <React.Fragment>
        <div className="row mt-3">
          <div className="col-md-2">
            <Link to="/">
              <img src={logo} alt="logo" className="logo-barra" />
            </Link>
          </div>
          <div className="col-md-4">
            <form
              name="Form"
              className="form-inline"
              onSubmit={this.handleSubmit}
            >
              <div className="busqueda">
                <input
                  name="busqueda"
                  type="text"
                  id="buscar"
                  value={this.props.busqueda}
                  placeholder="Busca una banda"
                  onChange={this.props.onChange}
                />
              </div>
            </form>
          </div>
        </div>
        <hr />
      </React.Fragment>
    );
  }
}

export default SearchBar;
