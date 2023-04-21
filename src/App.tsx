import { useEffect, useState } from 'react';
import './App.css';
import { ImagenesAhoracado } from './components/ImagenesAhorcado';
import {letters} from './helpers/letters';

function App() {

  const [word] = useState('COMPUTADORA');
  const [hiddenWord, setHiddenWord] = useState('_ '.repeat(word.length));

  const [attempts, setAttempts] = useState(0);

  const [lose, setLose] = useState(false);

  const [win, setWin] = useState(false);

  // Determinar si la persona perdio
  useEffect(() => {
    if (attempts >= 9) {
      setLose(true);
    }
  }, [attempts]);

  // Determinar si la persona gano
  useEffect(() => {
    const currentHiddenWord = hiddenWord.split(' ').join('');
    if (currentHiddenWord === word) {
      setWin(true);
    }
  }, [hiddenWord]);


  const checkLetter = (letter: string) => {
    if (lose){
      return;
    }

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

      {/* Mensaje de Perdio */}
      {
        (lose) ? <h3>Perdiste la palabra era: {word}</h3> : ""
      }

      {/* Mensaje de Gano */}
      {
        (win) ? <h3>Ganaste</h3> : ""
      }

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
