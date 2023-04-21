import { useState } from 'react';
import './App.css';
import { ImagenesAhoracado } from './components/ImagenesAhorcado';
import {letters} from './helpers/letters';

function App() {

  const [word] = useState('COMPUTADORA');
  const [hiddenWord, setHiddenWord] = useState('_ '.repeat(word.length));

  const [attempts, setAttempts] = useState(0);

  const checkLetter = (letter: string) => {
    if (!word.includes(letter)) {
      setAttempts(Math.min(attempts + 1, 9));
      return;
    }

    const hiddenWordArray = hiddenWord.split(' ');

    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        hiddenWordArray[i] = letter;
      }
    }

    setHiddenWord(hiddenWordArray.join(' '));
  }

  return (
    <div className='App'>
      {/* Imagenes del ahorcado */}
      <ImagenesAhoracado imageNumber={attempts}/>

      {/* Palabra Oculta */}
      <h3>{hiddenWord}</h3>

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
