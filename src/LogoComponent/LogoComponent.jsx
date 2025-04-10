import React from 'react';
import './LogoComponent.css';
import githubImage from '../assets/github.jpg';

const LogoComponent = () => {
  return (
    <div id='logo'>
        <img src={githubImage} alt="Logo do Github"/>
        <h1>Perfil</h1>
        <h1><b>GitHub</b></h1>
    </div>
  )
}

export default LogoComponent