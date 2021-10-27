import { ADD_TO_CART, REMOVE_ITEM,EMPTY_BASKET} from "../Types";

const CartReducer = (state, action) => {
 
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    }
    case REMOVE_ITEM: {
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload
        ),
      };
    }
  

    case EMPTY_BASKET:
      return {
        ...state,
       cartItems: [],
      };
    default:
      return state;
  }


};

export default CartReducer;