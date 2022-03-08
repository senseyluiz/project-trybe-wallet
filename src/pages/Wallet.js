import React from 'react';
import Formulario from '../components/Forrmulario';
import Header from '../components/Header';
import Table from '../components/Table';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Formulario />
        <Table />
      </div>
    );
  }
}

export default Wallet;
