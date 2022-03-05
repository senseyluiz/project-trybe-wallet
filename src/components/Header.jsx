import './Header.css';
import React from 'react';
import { connect } from 'react-redux';
import PropType from 'prop-types';

class Header extends React.Component {
  render() {
    const { email } = this.props;
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
          <span data-testid="total-field">0.00</span>

          <strong />
          <span data-testid="header-currency-field">BRL</span>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Header.propTypes = {
  email: PropType.string.isRequired,
};

export default connect(mapStateToProps)(Header);
