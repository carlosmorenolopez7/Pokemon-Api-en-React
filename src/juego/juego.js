import React, { useState, useEffect } from 'react';
import './juego.css';

function Juego() {
  const [pokemon, setPokemon] = useState(null);
  const [types, setTypes] = useState([]);
  const [answer, setAnswer] = useState(null);
  const [intentos, setIntentos] = useState(3);
  const [puntuacion, setPuntuacion] = useState(0);

  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = () => {
    setAnswer(null);
    fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 1008) + 1}`)
      .then(res => res.json())
      .then(data => {
        setPokemon(data);
        setTypes(data.types.map(type => type.type.name));
      })
      .catch(err => console.log(err));
  }

  const handleAnswer = (type) => {
    if (type === pokemon.types[0].type.name || type === pokemon.types[1]?.type.name) {
      setAnswer('correct');
      setPuntuacion(puntuacion + 1);
    } else {
      setAnswer('incorrect');
      setIntentos(intentos - 1);
      if (intentos === 1) {
        alert('Game Over');
        setIntentos(3);
        setPuntuacion(0);
      }
    }
    setTimeout(() => {
      fetchPokemon();
    }, 1000);
  }

  const renderAnswers = () => {
    const answerOptions = shuffleArray([...types, ...getWrongAnswers(pokemon.types[0].type.name)]);
    return answerOptions.map((type, index) => (
      <button key={type + index} onClick={() => handleAnswer(type)}>{type}</button>
    ));
  }

  const getWrongAnswers = (correctAnswer) => {
    const allTypes = ['normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug', 'ghost', 'steel', 'fire', 'water', 'grass', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'fairy'];
    const wrongAnswers = allTypes.filter(type => type !== correctAnswer);
    return [wrongAnswers[Math.floor(Math.random() * wrongAnswers.length)], wrongAnswers[Math.floor(Math.random() * wrongAnswers.length)]];
  }

  const shuffleArray = (array) => {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }

  return (
    <div>
      <div id="juego_main">
        <div id="juego_tipos">
        {pokemon &&
          <div>
            <h1>{pokemon.name}</h1>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt="pokemon"/>
            <div>
              {renderAnswers()}
            </div>
            {answer &&
              <div>
                {answer === 'correct' ? '¡Respuesta correcta!' : 'Respuesta incorrecta'}
              </div>
            }
            <div>
              Intentos: {intentos}
            </div>
            <div>
              Puntuación: {puntuacion}
            </div>
          </div>
        }
        </div>
      </div>
    </div>
  );
}

export default Juego;
