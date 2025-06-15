import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Navbar = ({handleCambio}) => {
  const [modal, setModal] = useState(false);
  const [usuario, setUsuario] = useState(null);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  // Cargar usuario desde localStorage al iniciar
  useEffect(() => {
    const storedUser = localStorage.getItem("usuario");
    if (storedUser) {
      setUsuario(JSON.parse(storedUser));
    }
  }, []);

  // Login con JWT
  const login = async (data) => {
    try {
      const response = await axios.post('http://localhost:3000/api/usuario/login', {
        email: data.email,
        contraseña: data.contraseña
      });

      const token = response.data.token;
      const user = response.data.usuario;

      // Guardar token y usuario en localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("usuario", JSON.stringify(user));
      setUsuario(user);

      alert(`Bienvenido ${user.nombre}`);
      setModal(false);
      navigate('/');
    } catch (error) {
      alert('❌ Error al iniciar sesión',error);
    }
  };

  // Cerrar sesión
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    setUsuario(null);
  };

  return (
    <div className="padre_navbar">
      <div className="hijo_navbar">
        <img
          src="/image/RedAdam.png"
          alt="logo-Red-Adam"
          className="img_logo"
        />
        <a onClick={()=>handleCambio(1)} href="#">Buscar Ofertas</a>
        <a onClick={()=>handleCambio(2)} href="#">Quienes Somos</a>
        <a onClick={()=>handleCambio(3)} href="#">Empresas</a>
        <a onClick={()=>handleCambio(4)} href="#">Contactos</a>

        <div className="contenedor_notificacion">
          <p>Notificaciones</p>

          {usuario ? (
            <>
              <p>Bienvenido, {usuario.nombre}</p>
              <button onClick={logout}>Cerrar sesión</button>
            </>
          ) : (
            <p onClick={() => setModal(true)}>Iniciar Sesión</p>
          )}

          {modal && (
            <div className="padre_modal">
              <div className="container">
                <div className="heading">Login</div>
                <form onSubmit={handleSubmit(login)} className="form">
                  <input
                    {...register('email', { required: 'El correo es obligatorio' })}
                    className="input"
                    type="email"
                    placeholder="E-mail"
                  />
                  <input
                    {...register('contraseña', { required: 'La contraseña es obligatoria' })}
                    className="input"
                    type="password"
                    placeholder="Contraseña"
                  />
                  <span className="forgot-password">
                    <a href="#">¿Olvidaste Contraseña?</a>
                  </span>
                  <input className="login-button" type="submit" value="Ingresar" />
                </form>
                <div className="social-account-container">
                  <span className="title">Registrarse</span>
                </div>
                <span className="agreement">
                  <a href="#">Ver términos de uso</a>
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
