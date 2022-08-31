import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getData } from "../redux/action";
import DataMap from "./DataMap";

import styled from "styled-components";

const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
  padding: 40px 60px;
  box-sizing: border-box;
`;
const Product = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);
  const store = useSelector((store) => store.data);
  console.log("store:", store);

  return (
    <Main>
      {store.map((el) => {
        return <DataMap key={el.id} value={el} />;
      })}
    </Main>
  );
};

export default Product;
