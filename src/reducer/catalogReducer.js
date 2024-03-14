const catalogReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        // Adicione a lógica para manipular a adição ao carrinho
        return state;
      default:
        return state;
    }
  };
  
  export default catalogReducer;
  