import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "../style.scss";
import { count, deleteCartItem } from "../redux/action";

const Main = styled.div`
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  cursor: pointer;
`;
const Img = styled.img`
  width: 100px;
`;
const ShowCartItem = (prop) => {
  const [counter, setCouneter] = useState(1);
  const { id, image, price, rating, title, brand } = prop.value;
  const dispatch = useDispatch();
  const handleCount = (ans, id) => {
    setCouneter(counter >= 0 ? counter + ans : 1);

    dispatch(count(ans, id));
  };

  const handleDelete = (e, id) => {
    e.stopPropagation();
    dispatch(deleteCartItem(id));
  };
  return (
    <Main>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>{brand}</span>
        <Img src={image} alt="" srcset="" />
        <span> ★{rating}</span>
      </div>
      <div>{title}</div>
      <div>${price}</div>

      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div>
          <>
            <button
              style={{
                background: "blue",
                borderRadius: "5px",
                border: "none",
                fontSize: "18px",
                margin: "7px",
              }}
              onClick={() => handleCount(-1, id)}
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
              onClick={() => handleCount(1, id)}
            >
              +
            </button>
            <span className="remove" onClick={(e) => handleDelete(e, id)}>
              Remove
            </span>
          </>
          {/* ) : ( */}
          {/* <Button
            onClick={() => {
              handleAdd(id);
            }}
          >
            Add to Cart
          </Button> */}
          {/* )} */}
        </div>
      </div>
    </Main>
  );
};

export default ShowCartItem;
