type FormProps = {
  onCancel: () => void;
};

function Form({ onCancel }: FormProps) {
  return (
    <fieldset>
      <legend />
      <label htmlFor="service-name-input">
        Nome do serviço
        <input type="text" name="" id="service-name-input" />
      </label>

      <label htmlFor="login-input">
        Login
        <input type="text" name="" id="login-input" />
      </label>

      <label htmlFor="passwprd-input">
        Senha
        <input type="password" name="" id="passwprd-input" />
      </label>

      <label htmlFor="url-input">
        URL
        <input type="text" name="" id="url-input" />
      </label>

      <button>Cadastrar</button>
      <button onClick={ onCancel }>Cancelar</button>
    </fieldset>
  );
}

export default Form;
