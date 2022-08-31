import { AllType } from "./action";

const init = {
  data: [],
  cart: [],
};

export const AddCart = (state = init, action) => {
  console.log("action:", action);
  switch (action.type) {
    case AllType.GetData:
      return { ...state, data: action.payload };
    case AllType.AddToCart:
      return {
        ...state,
        cart: [...state.cart, ...action.payload],
      };
    case AllType.AddToCartMore:
      return {
        ...state,
        cart: state.cart.map((el) => {
          if (el.id === action.id) {
            el.qut = el.qut + action.ans;
          }
          return el;
        }),
      };
    case AllType.DeleteCart:
      return {
        ...state,
        cart: state.cart.filter((el) => el.id !== action.payload),
      };
    default:
      return state;
  }
};
