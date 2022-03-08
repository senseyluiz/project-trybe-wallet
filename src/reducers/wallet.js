// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const initialStation = {
  currencies: [],
  expenses: [],
  total: 0,
};

const wallet = (state = initialStation, action) => {
  let total = 0;
  const despesas = [...state.expenses, action.payload];
  switch (action.type) {
  case 'SUBMIT_WALLET':

    despesas.forEach((despesa) => {
      total += Number(despesa.exchangeRates[despesa.currency].ask)
       * Number(despesa.value); // multiplicar pelo valor
    });
    return {

      ...state,
      expenses: despesas,
      total,
    };

  default:
    return state;
  }
};

export default wallet;
