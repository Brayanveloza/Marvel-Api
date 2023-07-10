import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/login.css";

export default function Login() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleChangeNombreUsuario = (event) => {
    setUserName(event.target.value);
  };

  const handleChangeContraseña = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userName.trim() === "" || password.trim() === "") {
      setError("Todos los campos son obligatorios");
      return;
    }
    if (userName === "brayan" && password === "1234") {
      localStorage.setItem("isLogged", "true");
      localStorage.setItem("username", userName);
      localStorage.setItem("password", password);
      navigate("/listado");
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="container-login">
      <section className="login">
      <h2>Please Log in</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Nombre de usuario:
            <input
              type="text"
              value={userName}
              onChange={handleChangeNombreUsuario}
            />
          </label>
        </div>
        <div>
          <label>
            Contraseña:
            <input
              type="password"
              value={password}
              onChange={handleChangeContraseña}
            />
          </label>
        </div>
        <button type="submit">Iniciar sesión</button>
        {error && <p className="error-message">{error}</p>}
      </form>
      </section>
    </div>

  );
}