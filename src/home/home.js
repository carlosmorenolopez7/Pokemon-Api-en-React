import React from 'react';
import './home.css';

function Home() {
  return (
    <div className="landing-page">
      <div className="header">
        <h1>Bienvenido a mi página web de Pokémon</h1>
      </div>
      <main>
        <section className="features">
          <h2>Características de la página</h2>
            <p>Ésta página web cuenta con 3 páginas, una de lista de Pokémon, una de Juego, y otra de Login.</p>
            <hr />
          <div className="feature">
            <img src='lista.png' alt="Feature 1" />
            <h3>Lista de Pokémon</h3>
            <p>En esta página se muestra una lista de 8 Pokémon, pero si pulsas en el botón "Obtener más",
                cargarán 8 Pokémon más, así hasta que se carguen todos los Pokémon que existen a día de hoy.
                Además, si pulsas el botón "Detalles", te llevará a una página con más información sobre el Pokémon.
                También puedes buscar un Pokémon en la barra de búsqueda, pero ten en cuenta que sólo busca entre
                los Pokémon que se han cargado en la página.
            </p>
          </div>
            <hr />
          <div className="feature">
            <img src='juego.png' alt="Feature 2" />
            <h3>Juego</h3>
            <p>En esta página se muestra la imágen de un Pokémon, del cual tendrás que adivinar su tipo principal
                ya que a pesar de que algunos Pokémon tienen dos tipos, en este juego solo tendrás que adivinar uno.
                Podrás acumular puntos si aciertas, pero si fallas 3 veces se acabará el juego y se reiniciarán los puntos. 
            </p>
          </div>
            <hr />
          <div className="feature">
            <img src='login.png' alt="Feature 3" />
            <h3>Login</h3>
            <p>En esta página se mostraran los 3 menús de sesión de la web, con los cuales podrás registrate en mi web,
                iniciar sesión una vez estas registrado, e iniciar sesión con Google.
                Para cerrar sesión te aparecera el botón "Cerrar Sesión" en la barra de navegación.
            </p>
          </div>
        </section>
        <section className="about">
          <h2>Sobre nosotros</h2>
          <p>Ésta página ha sido realizada con tecnología React, espero disfruten de su uso.</p>
          <a href="#" className="button">Aprende más</a>
        </section>
        <section className="contact">
          <h2>Contáctanos</h2>
          <form>
            <div>
              <label htmlFor="name">Nombre:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div>
              <label htmlFor="message">Mensaje:</label><br />
              <textarea id="message" name="message" required></textarea>
            </div>
            <a href="#" className="button">Enviar</a>
          </form>
        </section>
      </main>
      <footer>
        <p>Desarrollado por Carlos Moreno López - 2023</p>
        <a href="https://github.com/carlosmorenolopez7/Pokemon-Api-en-React"><p>Código disponible en Github <i class="fab fa-github"></i></p></a>
      </footer>
    </div>
  );
}

export default Home;