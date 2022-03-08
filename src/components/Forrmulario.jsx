import './Formulario.css';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addDespesa } from '../actions';

class Formulario extends React.Component {
  state = {
    id: 0,
    value: '',
    description: '',
    currency: 'USD',
    method: '',
    tag: '',
    moedas: [],
  }

  async componentDidMount() {
    const url = 'https://economia.awesomeapi.com.br/json/all';
    const response = await (await fetch(url)).json();
    this.setState({
      moedas: Object.keys(response),
    });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleCllick = () => {
    const { id, value, description, currency, method, tag } = this.state;
    const despesa = { id, value, description, currency, method, tag };
    const { dispatch } = this.props;

    dispatch(despesa);

    this.setState({
      id: id + 1,
    });
    document.querySelector('.valor').value = '';
    document.querySelector('.descricao').value = '';
  }

  render() {
    const { moedas } = this.state;

    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input
            id="valor"
            className="valor"
            name="value"
            data-testid="value-input"
            type="number"
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="descricao">
          Descricao:
          <input
            id="descricao"
            className="descricao"
            name="description"
            data-testid="description-input"
            type="text"
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="moeda">
          Moeda
          <select
            id="moeda"
            name="currency"
            data-testid="currency-input"
            onChange={ this.handleChange }

          >

            {
              moedas.map((moeda, index) => (
                moeda !== 'USDT' && <option key={ index } value={ moeda }>{moeda}</option>
              ))
            }
          </select>
        </label>

        <label htmlFor="pagamento">
          Método de pagamento:
          <select
            id="pagamento"
            name="method"
            data-testid="method-input"
            onChange={ this.handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="categoria">
          Categoria:

          <select
            data-testid="tag-input"
            id="categoria"
            name="tag"
            onChange={ this.handleChange }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>

        <button
          type="button"
          onClick={ this.handleCllick }
        >
          Adicionar despesa
        </button>

      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatch: (despesa) => dispatch(addDespesa(despesa)),
});

Formulario.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Formulario);
