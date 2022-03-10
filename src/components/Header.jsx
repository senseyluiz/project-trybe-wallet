import './Header.css';
import React from 'react';
import { connect } from 'react-redux';
import PropType from 'prop-types';

class Header extends React.Component {
  render() {
    const { email, despesas } = this.props;
    let total = 0;
    despesas.forEach((despesa) => {
      total += Number(despesa.exchangeRates[despesa.currency].ask)
       * Number(despesa.value); // multiplicar pelo valor
    });
    console.log(despesas);
    console.log('TOTAL: ', total);
    return (
      <header>
        <div className="logo">TRYBE</div>
        <div>
          <strong>
            Email:
          </strong>
          <span data-testid="email-field">{email}</span>

          <strong>
            Despesa Total: R$

          </strong>
          <span data-testid="total-field">

            {total.toFixed(2)}

          </span>

          <strong />
          <span data-testid="header-currency-field">BRL</span>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  despesas: state.wallet.expenses,
});

Header.propTypes = {
  email: PropType.string.isRequired,
  despesas: PropType.arrayOf(PropType.object).isRequired,
};

export default connect(mapStateToProps)(Header);
