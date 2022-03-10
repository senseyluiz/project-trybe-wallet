// Coloque aqui suas actions

export default function userAction(email) {
  return {
    type: 'USER_ACTION',
    payload: email,
  };
}

export function walletAction(obj) {
  return {

    type: 'SUBMIT_WALLET',
    payload: obj,
  };
}

export function addDespesa(despesa) {
  const url = 'https://economia.awesomeapi.com.br/json/all';
  return async (dispatch) => {
    const response = await (await fetch(url)).json();

    despesa.exchangeRates = response;
    dispatch(walletAction(despesa));
  };
}

export function deletaDespesa(id) {
  return {
    type: 'DELETAR_DESPESA',
    id,
  };
}
