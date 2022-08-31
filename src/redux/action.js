import axios from "axios";

export const AllType = {
  GetData: "GetData",
  AddToCart: "AddToCart",
};

export const ShowData = (payload) => ({
  type: AllType.GetData,
  payload,
});
export const getData = () => (dispatch) => {
  axios.get("http://localhost:8080/data").then((response) => {
    dispatch(ShowData(response.data));
  });
};
