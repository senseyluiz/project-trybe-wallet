import './Table.css';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Table extends React.Component {
  render() {
    const { despesas } = this.props;
    console.log(despesas);
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

                  <td data-testid="edit-btn">
                    <button type="button" className="yellow">Editar</button>
                    <button type="button" className="red" onClick={ this.delete }>Excluir</button>
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
};

export default connect(mapStateToProps, null)(Table);
