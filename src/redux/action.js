import axios from "axios";

export const AllType = {
  GetData: "GetData",
  AddToCart: "AddToCart",
  AddToCartMore: "AddToCartMore",
  DeleteCart: "DeleteCart",
};

export const ShowData = (payload) => ({
  type: AllType.GetData,
  payload,
});
export const getData = () => (dispatch) => {
  axios
    .get("https://secret-headland-19295.herokuapp.com/data")
    .then((response) => {
      dispatch(ShowData(response.data));
    });
};

export const showCart = (payload) => ({
  type: AllType.AddToCart,

  payload,
  qut: 1,
});
export const AddmoreCount = (ans, id) => ({
  type: AllType.AddToCartMore,
  id,
  ans,
});
export const addedCart = (id, data) => (dispatch) => {
  var val = data.filter((el) => el.id === id);
  dispatch(showCart(val));
};
export const count = (ans, id) => (dispatch) => {
  dispatch(AddmoreCount(ans, id));
};
export const DeleteItem = (payload) => ({
  type: AllType.DeleteCart,

  payload,
});
export const deleteCartItem = (id) => (dispatch) => {
  dispatch(DeleteItem(id));
};
