import React, { useState } from "react";
import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState("");
  const [pokemonImagenUrl, setPokemonImagenUrl] = useState("");
  const [yaLeDioClic, setYaLeDioClic] = useState(false);
  const [informacion, setInformacion] = useState("");

  const darClic = async () => {

    setYaLeDioClic(true);

    const obtenerPokemon = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}/`
    );

    // obtenerPokemon.json().then((data) => {console.log(data);})

    const data = await obtenerPokemon.json();

    setPokemonImagenUrl(data.sprites.front_default);
    setInformacion(data.abilities[0].ability.name);

    console.log(data);

  };

  const cambioInput = (e) => {
    setPokemon(e.target.value);
  };

  return (
    <div className="App">
      <div>
        <h1>Pokemon Catcher</h1>
        <input value={pokemon} onChange={(e) => cambioInput(e)} />
        <button onClick={darClic}>Catch pokemon</button>
        {yaLeDioClic && <img src={pokemonImagenUrl} alt={"pokemon image"} />}
        <div>
          {informacion}
        </div>
      </div>
    </div>
  );
}

export default App;
