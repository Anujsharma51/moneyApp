import React, { useState } from "react";

import styled from "styled-components";
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
  const [show, setShow] = useState(false);
  const { id, image, price, rating, title, brand } = prop.value;

  const handleAdd = () => {
    setShow(true);
  };
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
          {show ? (
            <>
              <button
                style={{
                  background: "blue",
                  borderRadius: "5px",
                  border: "none",
                  fontSize: "18px",
                  margin: "7px",
                }}
                onClick={() => setCouneter(counter > 0 ? counter - 1 : 0)}
              >
                -
              </button>
              {counter}
              <button
                style={{
                  background: "blue",
                  borderRadius: "5px",
                  border: "none",
                  fontSize: "18px",
                  margin: "7px",
                }}
                onClick={() => setCouneter(counter + 1)}
              >
                +
              </button>
            </>
          ) : (
            ""
          )}
        </div>
        <Button
          onClick={() => {
            handleAdd();
          }}
        >
          Add to Cart
        </Button>
      </div>
    </Main>
  );
};

export default DataMap;
