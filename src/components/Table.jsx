import './Table.css';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deletaDespesa } from '../actions';

class Table extends React.Component {
  delete = (id) => {
    const { dispatch } = this.props;
    dispatch(deletaDespesa(id));
  }

  render() {
    const { despesas } = this.props;

    return (

      <table>
        <thead>
          <tr>
            <th> Descrição </th>
            <th> Tag </th>
            <th> Método de pagamento </th>
            <th> Valor </th>
            <th> Moeda </th>
            <th> Câmbio utilizado </th>
            <th> Valor convertido </th>
            <th> Moeda de conversão </th>
            <th> Editar/Excluir </th>
          </tr>
        </thead>

        <tbody>
          {
            despesas.map((despesa) => {
              const {
                id, description, tag, method, value, currency, exchangeRates,
              } = despesa;

              const cambio = exchangeRates[currency].ask;
              const valorConvertido = (cambio * value);
              const moeda = exchangeRates[currency].name.split('/')[0];
              return (
                <tr key={ id }>

                  <td>
                    {description}
                  </td>

                  <td>
                    {tag}
                  </td>

                  <td>
                    {method}
                  </td>

                  <td>
                    {Number(value).toFixed(2)}
                  </td>

                  <td>
                    {moeda}
                  </td>

                  <td>
                    {Number(cambio).toFixed(2)}
                  </td>

                  <td>
                    {valorConvertido.toFixed(2)}
                  </td>

                  <td>
                    Real
                  </td>

                  <td>
                    <button type="button" className="yellow">Editar</button>

                    <button
                      type="button"
                      className="red"
                      onClick={ () => this.delete(id) }
                      data-testid="delete-btn"
                    >
                      Excluir
                    </button>
                  </td>

                </tr>);
            })
          }

        </tbody>
      </table>
    );
  }
}
const mapStateToProps = (state) => ({
  despesas: state.wallet.expenses,

});

Table.propTypes = {
  despesas: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, null)(Table);
