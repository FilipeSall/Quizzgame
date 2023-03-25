import React, { useContext, useState } from 'react';
import './home.css';
import { NavLink, useNavigate } from 'react-router-dom';
import useLocalStorage from '../../hooks/useLocalStorage';
import { ImPacman } from "react-icons/im";
import { GlobalContext } from '../../GlobalContext';

function Home() {
  // Estados locais
  const [nomeValidation, setNomeValidation] = useState(null);
  const [emailValidation, setEmailValidation] = useState(null);

  // Contexto global
  const { setStoredName } = useContext(GlobalContext);

  // Expressão regular para validar o email
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  // Hook para navegar entre as rotas
  const navigate = useNavigate();

  // Estados locais para armazenar o nome e email em localStorage
  const [nome, setNome] = useLocalStorage('name', '');
  const [email, setEmail] = useLocalStorage('email', '');

  // Função para lidar com a mudança de nome
  const handleNameChange = (e) => {
    const newName = e.target.value;
    setNome(newName);
    setStoredName(newName); // Atualiza o nome armazenado no contexto global
  }

  // Função para lidar com a validação do campo de nome
  const handleNameBlur = () => {
    setNomeValidation(nome.length >= 3 ? true : false);
  }

  // Função para lidar com a mudança de email
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  // Função para lidar com a validação do campo de email
  const handleEmailBlur = () => {
    setEmailValidation(emailRegex.test(email) ? true : false);
  }

  // Função para lidar com o envio do formulário
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const isFormValid = nome && email && nomeValidation && emailValidation;
    setNomeValidation(nome.length >= 3 ? true : false);
    setEmailValidation(emailRegex.test(email) ? true : false);

    if (isFormValid) {
      navigate('/perguntas'); // Navega para a página de perguntas
    }
  }

  return (
    <main className='home__container'>
      <div className="app-icon">
        <ImPacman size={70} color="#62466B" />
        <h1 className='title__container'>Quizzgame</h1>
      </div>
      <form className='form'>
        <div className='input__container'>
          <label htmlFor='name'>Digite seu nome</label>
          <input type='text' id='name' value={nome} onChange={handleNameChange} className={`${nomeValidation === false ? 'input-error' : 'input-ok'} input`} required onBlur={handleNameBlur} />
          {nomeValidation === false ? <p className='error-mensage'>Campo precisa ser preenchido.</p> : ''}
        </div>
        <div className="input__container">
          <label>Digite seu email</label>
          <input type='email' id='email' value={email} onChange={handleEmailChange} className={`${emailValidation === false ? 'input-error' : 'input-ok'} input`} onBlur={handleEmailBlur} required />
          {emailValidation === false ? <p className='error-mensage'> Preencha um email valido.</p> : ''}
        </div>
        <div className='btn__container'>
          <NavLink to='/perguntas' onClick={handleFormSubmit} >Começar</NavLink>
        </div>
      </form>
    </main>
  );
}

export default Home;
