import React from "react";
import "./SearchComponent.css";
import githubImage from "../assets/github.jpg";

const LogoComponent = () => {
  return (
    <main>
      <div id="logo">
        <img src={githubImage} alt="Logo do Github" />
        <h1>Perfil</h1>
        <h1>
          <b>GitHub</b>
        </h1>
      </div>

      <label id="search" htmlFor="">
        <input type="text" placeholder="Digite um usuário do GitHub"/>
      </label>
    </main>
  );
};

export default LogoComponent;
