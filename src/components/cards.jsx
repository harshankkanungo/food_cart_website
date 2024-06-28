import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Cardsdata from "./cardsData";
import { useDispatch } from "react-redux";
import { ADD } from "../redux/actions/action";

const Cards = () => {
  const [data, setData] = useState(Cardsdata);
  const dispatch = useDispatch();

  const send = (e) => {
    // console.log(e)
    dispatch(ADD(e));
  };
  return (
    <div>
      <div className="container mt-3">
        <h2 className="text-center">Add To Cart</h2>
        <div className="row d-flex justify-content-center align-items-center">
          {data.map((data, id) => {
            return (
              <Card
                style={{ width: "22rem ", border: "none" }}
                key={id}
                className="mx-2 mt-4 card_style"
              >
                <Card.Img
                  variant="top"
                  src={data.imgdata}
                  style={{ height: "16rem" }}
                  className="mt-4"
                />
                <Card.Body>
                  <Card.Title>{data.rname}</Card.Title>
                  <Card.Text>Price: ₹ {data.price}</Card.Text>
                  <div className="button_div d-flex justify-content-center">
                    <Button
                      variant="primary"
                      className="col-lg-12"
                      onClick={() => send(data)}
                    >
                      Add To Cart
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cards;
