import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Title from './components/Title';
import { PasswordType } from './types';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [showRegisterBt, setShowRegisterBt] = useState(true);
  const [passwordBox, setPasswordBox] = useState<PasswordType[]>([]);

  function handleShowForm() {
    setShowForm(true);
    setShowRegisterBt(false);
  }

  function handleCancel() {
    setShowForm(false);
    setShowRegisterBt(true);
  }

  function handleAddPassword(newPassword: PasswordType) {
    setPasswordBox([...passwordBox, newPassword]);
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

      <div id="password-box">

        {passwordBox.length > 0 ? (
          passwordBox.map((password) => (
            <div key={ password.password }>
              <a href={ password.url } target="_blank" rel="noopener noreferrer">
                {password.serviceName}
              </a>
              <p>{ `Login: ${password.login}` }</p>
              <p>{ `Senha: ${password.password}` }</p>
            </div>
          ))
        ) : (
          <p>Nenhuma senha cadastrada</p>
        )}
      </div>

    </div>
  );
}

export default App;
