const INIT_STATE = {
    carts: [],
  };
  
  export let ADD_CART = "cart/add_cart";
  export let RMT_CART = "cart/remove_cart";
  export let RMT_ONE = "cart/remove_one";
  
  export const cartreducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case ADD_CART:
        // return { ...state, carts: [...state.carts, action.payload] };
        let itemsindex = state.carts.findIndex(
          (items) => items.id === action.payload.id
        );
        if (itemsindex >= 0) {
          state.carts[itemsindex].qnty += 1;
        } else {
          const temp = { ...action.payload, qnty: 1 };
          return { ...state, carts: [...state.carts, temp] };
        }
      case RMT_CART:
        let data = state.carts.filter((ele) => ele.id !== action.payload);
        return { ...state, carts: data };
  
      case RMT_ONE:
        let itemsindex_dec = state.carts.findIndex(
          (items) => items.id === action.payload.id
        );
        if (state.carts[itemsindex_dec].qnty >= 1) {
          const delete_item = (state.carts[itemsindex_dec].qnty -= 1);
          // console.log([...state.carts] , delete_item)
          return { ...state, carts: [...state.carts] };
        } else if (state.carts[itemsindex_dec].qnty === 1) {
          let data = state.carts.filter((ele) => ele.id !== action.payload);
          return { ...state, carts: data };
        }
  
      default:
        return state;
    }
  };
  