import { useState } from 'react';

type FormProps = {
  onCancel: () => void;
};

function Form({ onCancel }: FormProps) {
  const [serviceNameInput, setServiceNameInput] = useState('');
  const [loginInput, setLoginInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [urlInput, setUrlInput] = useState('');
  const specialCharRegex = /\W/;
  const numberReg = /\d/;
  const LettReg = /[a-zA-z]/;
  const havSpecial = specialCharRegex.test(passwordInput);
  const havNum = numberReg.test(passwordInput);
  const havLett = LettReg.test(passwordInput);
  const validPassword = 'valid-password-check';
  const invalidPassword = 'invalid-password-check';

  const isFormValid = serviceNameInput.length > 0
    && loginInput.length > 0
    && passwordInput.length >= 8
    && passwordInput.length <= 16
    && urlInput.length > 0
    && havSpecial
    && havNum
    && havLett;

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
          // maxLength={ 16 }
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
      <div>
        <p
          className={ passwordInput.length >= 8 ? validPassword : invalidPassword }
        >
          Possuir 8 ou mais caracteres
        </p>
        <p
          className={
            passwordInput.length >= 8 && passwordInput.length <= 16
              ? validPassword : invalidPassword
          }
        >
          Possuir até 16 caracteres
        </p>
        <p
          className={ havNum && havLett ? validPassword : invalidPassword }
        >
          Possuir letras e números
        </p>
        <p
          className={ havSpecial ? validPassword : invalidPassword }
        >
          Possuir algum caractere especial
        </p>
      </div>
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
