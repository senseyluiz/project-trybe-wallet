// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const initialStation = {
  currencies: [],
  expenses: [],
};

const wallet = (state = initialStation, action) => {
  switch (action.type) {
  case 'SUBMIT_WALLET':

    break;

  default:
    return state;
  }
};

export default wallet;
