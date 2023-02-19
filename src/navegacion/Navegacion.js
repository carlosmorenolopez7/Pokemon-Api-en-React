import { Link } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../firebase.js";
import "./Navegacion.css";

function Navegacion() {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const login = document.getElementById("loginNav");
        login.style.display = "none";
        const cerrarSesion = document.createElement("a");
        cerrarSesion.className = "link";
        cerrarSesion.id = "cerrarSesion";
        cerrarSesion.href = "#";
        cerrarSesion.innerText = "Cerrar Sesión";
        cerrarSesion.addEventListener("click", () => {
          auth.signOut();
          alert("Sesión cerrada")
        });
        const navegation = document.querySelector(".navegation");
        navegation.appendChild(cerrarSesion);
      } else {
        const login = document.getElementById("loginNav");
        login.style.display = "block";
        const cerrarSesion = document.getElementById("cerrarSesion");
        if (cerrarSesion) {
          cerrarSesion.remove();
        }
      }
    });
  }, []);

  return (
    <div className="navegation">
      <Link to="/" className="link"><img src="logo.jpg" /></Link>
      <Link to="/" className="link">Inicio</Link>
      <Link to="/Lista" className="link">Lista de Pokémon</Link>
      <Link to="/juego" className="link">Juego</Link>
      <Link id="loginNav" to="/login" className="link">Login</Link>
    </div>
  );
}

export default Navegacion;
