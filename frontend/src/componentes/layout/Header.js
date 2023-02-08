import React from "react";
import '../../styles/Header.css'

const Header = (props) => {
  return (

    <header>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
        integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />

      <div className="holder contenedor">
        <img class="logo" src="../../../img/home/images2.jpg" width="100" alt="" />
        <h1>Proyecto Inmobiliario</h1>
        <h5 className="animate__animated animate__bounceInLeft">sin intermediario</h5>
      </div>
      <div className="login">
        <a href="http://localhost:3000/admin/login" target={"_blank"} class="btn btn-warning">Iniciar Sesión <i class="fa-solid fa-right-to-bracket"></i> </a>
      </div>
    </header>
  );
};
export default Header;