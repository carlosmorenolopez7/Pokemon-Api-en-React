import SinglePokemon from "../single-pokemon/SinglePokemon"
import { useEffect, useState } from "react";

function Lista() {
    const [pokemonList, setPokemonList] = useState([]);
    const [URL, setURL] = useState("https://pokeapi.co/api/v2/pokemon?limit=8");
    const [searchQuery, setSearchQuery] = useState("");
  
    useEffect(() => { getApiData() }, []);
  
    function getApiData(){
      fetch(URL)
      .then((response) => response.json())  
      .then((apiData) => {
        setPokemonList(pokemonList.concat(apiData.results));
        setURL(apiData.next)
      });
    }
  
    function loadMore(){
      getApiData();
    }
    
    function handleSearch(e){
      setSearchQuery(e.target.value);
    }
    
    const filteredPokemonList = pokemonList.filter(pokemon =>
      pokemon.name.includes(searchQuery.toLowerCase())
    );
    
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col">
              <input type="text" placeholder="Buscar Pokémon" className="form-control mb-3" onChange={handleSearch} />
            </div>
          </div>
          <div className="row">
            {filteredPokemonList.map((pokemon) => ( <SinglePokemon key={pokemon.name} pokemonURL={pokemon.url} />))}
          </div>
        </div>
        <button className="btn mt-5 mb-5" onClick={loadMore}>Obtener más</button>
      </div>
    );
}

export default Lista;