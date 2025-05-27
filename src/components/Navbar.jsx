import React, { useState } from "react";

const Navbar = () => {
  const [modal, setModal] = useState(false);
  return (
    <div className="padre_navbar">
      <div className="hijo_navbar">
        <img
          src="/image/RedAdam.png"
          alt="logo-Red-Adam"
          className="img_logo"
        />
        <div className="contenedor_notificacion">
          <p> Notificaciones</p>
          <p onClick={()=>setModal(!modal)}>Iniciar Sesión</p>
          {modal && (
           <div className="padre_modal">
             <div class="container">
              <div class="heading">Login</div>
              <form action="" class="form">
                <input
                  required=""
                  class="input"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="E-mail"
                />
                <input
                  required=""
                  class="input"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Contraseña"
                />
                <span class="forgot-password">
                  <a href="#">Olvidaste Contraseña?</a>
                </span>
                <input class="login-button" type="submit" value="Ingresar" />
              </form>
              <div class="social-account-container">
                <span class="title ">Registrarse</span>
              </div>
              <span class="agreement">
                <a href="#">Learn user licence agreement</a>
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
