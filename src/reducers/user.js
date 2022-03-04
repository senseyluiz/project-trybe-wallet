// Esse reducer será responsável por tratar as informações da pessoa usuária

const initialStation = {
  email: '',
};

function user(state = initialStation, action) {
  switch (action.type) {
  case 'USER_ACTION':
    return {
      ...state,
      email: action.payload,
    };
  default:
    return state;
  }
}
export default user;
