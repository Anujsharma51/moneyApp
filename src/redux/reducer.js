import { AllType } from "./action";

const init = {
  data: [],
  cart: [],
};

export const AddCart = (state = init, action) => {
  switch (action.type) {
    case AllType.GetData:
      return { ...state, data: action.payload };

    default:
      return state;
  }
};
