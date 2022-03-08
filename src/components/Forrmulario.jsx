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
  }

  render() {
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input
            id="valor"
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

            <option value="USD">USD</option>
            <option value="CAD">CAD</option>
            <option value="GBP">GBP</option>
            <option value="ARS">ARS</option>
            <option value="BTC">BTC</option>
            <option value="LTC">LTC</option>
            <option value="EUR">EUR</option>
            <option value="JPY">JPY</option>
            <option value="CHF">CHF</option>
            <option value="AUD">AUD</option>
            <option value="CNY">CNY</option>
            <option value="ILS">ILS</option>
            <option value="ETH">ETH</option>
            <option value="ETH">ETH</option>
            <option value="DOGE">DOGE</option>
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
