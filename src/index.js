// 1° importar react
import React from "react";
// 2° para renderear
import ReactDOM from "react-dom";

import "./css/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*
// version vainilla js
let elemento = document.createElement("p");
elemento.innerHTML = "Hola";
let contenedor = document.getElementById("root");
contenedor.appendChild(elemento);
*/
/*
// version react
let elemento = <p>Hola, desde JSX</p>;
let contenedor = document.getElementById("root");
ReactDOM.render(elemento, contenedor);


let jsx = React.createElement("h2", {}, "Hola desde create element");
let nombre = "Lei";
let apellido = "Cosha Gonzalez";
let edad = 37;
let calculo = (edad) => 5 + 5 + edad;

let jsxMultiple = (
  <div>
    <h1>Soy una variable con muchos elementos</h1>
    <h3>JSX</h3>
    <p>
      Hola que tal, soy {nombre} {apellido} y tengo {edad - 10} años más.
      {calculo(edad)}
    </p>
  </div>
);
let contenedor = document.getElementById("root");
ReactDOM.render(jsxMultiple, contenedor);
*/
