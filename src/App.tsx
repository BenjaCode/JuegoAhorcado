import { useState } from 'react';
import './App.css';
import { ImagenesAhoracado } from './components/ImagenesAhorcado';
import {letters} from './helpers/letters';

function App() {

  const [attempts, setAttempts] = useState(0);

  const checkLetter = (letter: string) => {
    console.log(letter);
    setAttempts(Math.min(attempts + 1, 9));
  }

  return (
    <div className='App'>
      {/* Imagenes del ahorcado */}
      <ImagenesAhoracado imageNumber={attempts}/>

      {/* Palabra Oculta */}
      <h3>__________</h3>

      {/* Contador de Intentos */}
      <h3>Intentos: {attempts}</h3>

      {/* Letras del abecedario */}
      {
        letters.map((letter, index) => (
          <button key={index} onClick={() => checkLetter(letter)}>{letter}</button>
        ))
      }
    </div>
  )
}

export default App
