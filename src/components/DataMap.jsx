import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addedCart, count } from "../redux/action";
const Main = styled.div`
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  cursor: pointer;
`;
const Button = styled.button`
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #000;

  cursor: pointer;

  display: flex;
  justify-content: flex-end;
  font-size: 18px;

  &:hover {
    opacity: 0.7;
  }
`;
const Img = styled.img`
  width: 100px;
`;
const DataMap = (prop) => {
  const [counter, setCouneter] = useState(1);
  const [btn, setBtn] = useState(false);
  const { id, image, price, rating, title, brand } = prop.value;
  const dispatch = useDispatch();
  const store = useSelector((store) => store.data);
  const store1 = useSelector((store) => store.cart);

  const handleAdd = (id) => {
    setBtn(true);
    dispatch(addedCart(id, store));
  };
  const handleCount = (ans, id) => {
    setCouneter(counter + ans);
    dispatch(count(ans, id));
  };

  useEffect(() => {
    if (store1.length > 0) {
      store1.map((el) => {
        if (el.id === id) {
          setBtn(true);
        }
        return el;
      });
    }
  }, []);
  return (
    <Main>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>{brand}</span>
        <Img src={image} alt="" srcset="" />
        <span> ★{rating}</span>
      </div>
      <div>{title}</div>
      <div>${price}</div>

      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div>
          {!btn ? (
            <Button
              onClick={() => {
                handleAdd(id);
              }}
            >
              Add to Cart
            </Button>
          ) : (
            <Button style={{ cursor: "not-allowed" }} disabled={true}>
              Added to Cart
            </Button>
          )}
          {/* )} */}
        </div>
      </div>
    </Main>
  );
};
// {
//   /* {show ? (
//             <>
//               <button
//                 style={{
//                   background: "blue",
//                   borderRadius: "5px",
//                   border: "none",
//                   fontSize: "18px",
//                   margin: "7px",
//                 }}
//                 onClick={() => handleCount(-1, id)}
//               >
//                 -
//               </button>
//               {counter}
//               <button
//                 style={{
//                   background: "blue",
//                   borderRadius: "5px",
//                   border: "none",
//                   fontSize: "18px",
//                   margin: "7px",
//                 }}
//                 onClick={() => handleCount(1, id)}
//               >
//                 +
//               </button>
//             </> */
// }
// {
//   /* ) : ( */
// }
export default DataMap;
