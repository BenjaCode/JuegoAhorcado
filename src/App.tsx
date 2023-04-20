import './App.css';
import { ImagenesAhoracado } from './components/ImagenesAhorcado';
import {letters} from './helpers/letters';

function App() {
  return (
    <div className='App'>
      {/* Imagenes del ahorcado */}
      <ImagenesAhoracado imageNumber={1}/>

      {/* Palabra Oculta */}
      <h3>__________</h3>

      {/* Contador de Intentos */}
      <h3>Intentos: 0</h3>

      {/* Letras del abecedario */}
      {
        letters.map((letter, index) => (
          <button key={index}>{letter}</button>
        ))
      }
    </div>
  )
}

export default App
