import { useState } from 'react';

type FormProps = {
  onCancel: () => void;
};

function Form({ onCancel }: FormProps) {
  const [serviceNameInput, setServiceNameInput] = useState('');
  const [loginInput, setLoginInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [urlInput, setUrlInput] = useState('');
  const regexSpecialChar = /[^a-zA-Z ]/g;
  const haveSpecialChar = regexSpecialChar.test(passwordInput);

  const isFormValid = serviceNameInput.length > 0
    && loginInput.length > 0
    && passwordInput.length >= 8
    && urlInput.length > 0
    && !haveSpecialChar;

  return (
    <fieldset>
      <legend />
      <label htmlFor="service-name-input">
        Nome do serviço
        <input
          type="text"
          name=""
          id="service-name-input"
          value={ serviceNameInput }
          onChange={ ({ target: { value } }) => setServiceNameInput(value) }
        />
      </label>

      <label htmlFor="login-input">
        Login
        <input
          type="text"
          name=""
          value={ loginInput }
          id="login-input"
          onChange={ ({ target: { value } }) => setLoginInput(value) }
        />
      </label>

      <label htmlFor="passwprd-input">
        Senha
        <input
          type="password"
          name=""
          value={ passwordInput }
          id="passwprd-input"
          maxLength={ 16 }
          onChange={ ({ target: { value } }) => setPasswordInput(value) }
        />
      </label>

      <label htmlFor="url-input">
        URL
        <input
          type="text"
          name=""
          value={ urlInput }
          onChange={ ({ target: { value } }) => setUrlInput(value) }
          id="url-input"
        />
      </label>
      <button
        disabled={ !isFormValid }
      >
        Cadastrar
      </button>
      <button onClick={ onCancel }>Cancelar</button>
    </fieldset>
  );
}

export default Form;
