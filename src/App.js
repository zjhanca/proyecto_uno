import './App.css';
import Footer from './componentes/Footer';
import Menu from './componentes/Menu';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Proyecto One</h1>
      </header>
      <nav>
        <Menu />
      </nav>
      <main>
        <h2>Clarent KP</h2>
        <p>
          Clarent, "El Nene KP" es un artista emergente de Puerto Rico que ha ido ganando 
          reconocimiento en la escena urbana gracias a su estilo fresco, versátil y cargado 
          de energía. Su propuesta musical combina ritmos característicos del reguetón y el 
          trap con un flow particular que lo ha diferenciado entre los nuevos talentos de la isla.
          Con cada lanzamiento, demuestra su evolución artística y su capacidad para conectar 
          con audiencias diversas a través de letras auténticas y producciones de alta calidad.
        </p>
        <div className="image-container">
          <div>
            <img src="https://images.tomaticket.com/eventos/e820998-entradas-clarent-en-denia-9tgc" alt="Clarent KP en concierto" />
          </div>
          <div>
            <img src="https://i.ytimg.com/vi/hTkPR3o36AM/mqdefault.jpg" alt="Clarent KP video musical" />
          </div>
          <div>
            <img src="https://s3.abcstatics.com/lavozdigital/www/multimedia/provincia/2025/03/20/unnamed(32)-Rpb0LIdxGe9qVfRGWtyzDDK-1200x840@abc.jpg" alt="Clarent KP sesión fotográfica" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;