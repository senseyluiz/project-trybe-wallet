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

  case 'DELETAR_DESPESA': {
    const test = [...state.expenses];
    test.forEach((despesa) => {
      total += Number(despesa.exchangeRates[despesa.currency].ask)
       * Number(despesa.value); // multiplicar pelo valor
    });

    const objeto = state.expenses.find((despesa) => despesa.id === action.id);
    // console.log(objeto);
    const valor = Number(objeto.value);
    // console.log(objeto.exchangeRates);
    const cambio = Number(objeto.exchangeRates[objeto.currency].ask);
    const reduzir = valor * cambio;
    const teste = total - reduzir;
    console.log(teste);
    return {
      ...state,
      expenses: state.expenses.filter((despesa) => despesa.id !== action.id),
      total: teste,
    }; }

  default:
    return state;
  }
};

export default wallet;
