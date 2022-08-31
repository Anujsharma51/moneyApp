import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showCartPage } from "../redux/action";
import ShowCartItem from "./ShowCartItem";
import "../style.scss";
import styled from "styled-components";
const Main = styled.div`
  /* display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
  padding: 40px 60px;
  box-sizing: border-box; */
`;
const Cart = () => {
  const [sum, setSum] = useState(0);
  const store = useSelector((store) => store.cart);

  const getPrice = () => {
    var total = store.reduce(function (acc, elem) {
      return acc + +elem.price * +elem.qut;
    }, 0);
    setSum(total);
    console.log(total);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    getPrice();
  }, [store]);
  return (
    <>
      {sum > 0 ? <h1>price={sum}</h1> : <h1>Please Add Product</h1>}

      <Main className="proDiv">
        {store.map((el) => {
          return <ShowCartItem key={el.id} value={el} />;
        })}
      </Main>
    </>
  );
};

export default Cart;
