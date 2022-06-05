import './Login.css';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import userAction from '../actions/index';

class Login extends React.Component {
  state = {
    email: '',
    senha: '',
    btnDisabled: true,
  }

  validaEmail = (email) => {
    const mail = /\S+@\S+\.\S+/;
    return mail.test(email);
  }

  validaSenha = (senha) => {
    const min = 6;
    return senha.length >= min;
  }

  validaBotao = () => {
    const { email, senha } = this.state;

    this.setState({
      btnDisabled: !(this.validaSenha(senha) && this.validaEmail(email)),
    });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value }, this.validaBotao);
  }

  logar = () => {
    const { email } = this.state;
    const { history, salvaEmail } = this.props;
    salvaEmail(email);
    history.push('/carteira');
  }

  render() {
    const { email, senha, btnDisabled } = this.state;
    return (
      <main className="Login">

        <div className=" logo-login">
          TRYBE
          {' '}
          <br />
          {' '}
          WALLET
        </div>

        <label htmlFor="email">
          <input
            data-testid="email-input"
            name="email"
            value={ email }
            type="text"
            id="email"
            placeholder="Digite seu email"
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="senha">
          <input
            data-testid="password-input"
            type="password"
            name="senha"
            value={ senha }
            id="senha"
            placeholder="Digite sua senha"
            onChange={ this.handleChange }
          />
        </label>

        <button
          type="button"
          disabled={ btnDisabled }
          onClick={ this.logar }
        >
          Entrar

        </button>
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  salvaEmail: (email) => dispatch(userAction(email)),
});

Login.propTypes = {
  history: PropTypes.shape().isRequired,
  salvaEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
