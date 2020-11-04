import React, { Component } from "react";
import "./css/page-home.css";
import logo from "./logo.svg";

class PageHome extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push(`/busqueda?${this.state.busqueda}`);
  };

  onChange = (e) => {
    this.setState({
      busqueda: e.target.value,
    });
  };

  state = {
    busqueda: "",
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row centrado">
            <div className="col-md-12 centrar">
              <img src={logo} alt="logo" id="logo" />
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
                    onChange={this.onChange}
                  />
                </div>
                <div className="actions">
                  <button className="btng" type="submit">
                    Search similar artist
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PageHome;
