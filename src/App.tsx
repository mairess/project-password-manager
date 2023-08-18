import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Title from './components/Title';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [showRegisterBt, setShowRegisterBt] = useState(true);

  function handleShowForm() {
    setShowForm(true);
    setShowRegisterBt(false);
  }

  function handleCancel() {
    setShowForm(false);
    setShowRegisterBt(true);
  }

  return (
    <div>
      <Title />
      {showRegisterBt && <button onClick={ handleShowForm }>Cadastrar nova senha</button>}
      {showForm && <Form onCancel={ () => handleCancel() } /> }
    </div>
  );
}

export default App;
