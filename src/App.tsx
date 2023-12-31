import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Title from './components/Title';
import { PasswordType } from './types';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [showRegisterBt, setShowRegisterBt] = useState(true);
  const [passwordBox, setPasswordBox] = useState<PasswordType[]>([]);
  const [hidePasswords, SetHidePasswords] = useState(false);

  function handleShowForm() {
    setShowForm(!showForm);
    setShowRegisterBt(!showRegisterBt);
  }

  function handleCancel() {
    setShowForm(!showForm);
    setShowRegisterBt(!showRegisterBt);
  }

  function handleAddPassword(newPassword: PasswordType) {
    setPasswordBox([...passwordBox, newPassword]);
  }

  function handleRemovePassword(
    passwordToRemove: string,
    loginToRemove: string,
    serviceNameToRemove: string,
    urlToRemove: string,
  ) {
    const upDatedPasswords = passwordBox.filter((password) => !(
      password.password === passwordToRemove
        && password.login === loginToRemove
        && password.serviceName === serviceNameToRemove
        && password.url === urlToRemove
    ));
    setPasswordBox(upDatedPasswords);
  }

  return (
    <div>
      <Title />
      {showRegisterBt && <button onClick={ handleShowForm }>Cadastrar nova senha</button>}
      {showForm
      && <Form
        onCancel={ () => handleCancel() }
        onPasswordAdd={ (newPassword) => handleAddPassword(newPassword) }
      /> }

      <fieldset id="password-box">

        <legend>Senha cadastradas</legend>

        <input
          type="checkbox"
          id="showPasswordToggle"
          onChange={ () => SetHidePasswords(!hidePasswords) }

        />
        <label htmlFor="showPasswordToggle">Esconder senhas</label>

        {passwordBox.length > 0 ? (
          passwordBox.map((password) => (
            <div key={ password.password }>
              <a href={ password.url } target="_blank" rel="noopener noreferrer">
                {password.serviceName}
              </a>
              <p>{password.login}</p>
              <p>{hidePasswords ? '******' : password.password}</p>

              <button
                data-testid="remove-btn"
                onClick={ () => handleRemovePassword(
                  password.password,
                  password.login,
                  password.serviceName,
                  password.url,
                ) }
              >
                remover
              </button>

            </div>
          ))
        ) : (
          <p>Nenhuma senha cadastrada</p>
        )}
      </fieldset>

    </div>
  );
}

export default App;
