import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ADD, REMOVE, REMOVEONE } from "../redux/actions/action";

const CardsDetails = () => {
  const [data, setData] = useState([]);
  // const [price, setPrice] = useState(0);
  // console.log(price)
  const { id } = useParams();
  // console.log(id);
  const dispatch = useDispatch();
  const show = useSelector((state) => state.cartreducer.carts);
  // console.log(show);

  let history = useNavigate();

  const compare = () => {
    let comparedata = show.filter((e) => {
      return e.id == id;
    });
    setData(comparedata);
  };

  const send = (e) => {
    // console.log(e)
    dispatch(ADD(e));
  };

  const remove = (items) => {
    dispatch(REMOVEONE(items));
  };

  const dlt = (id) => {
    dispatch(REMOVE(id));
    history("/");
  };

  useEffect(() => {
    compare();
  }, [id]);
  return (
    <div>
      <div className="container mt-2">
        <div className="text-center">
          <h1>Items Details Page</h1>
        </div>
        <section className="container mt-3">
          <div className="iteamsdetails">
            {data.map((ele) => {
              return (
                <>
                  <div className="items_img">
                    <img src={ele.imgdata} alt="" />
                  </div>
                  <div className="details">
                    <Table>
                      <tr>
                        <td>
                          <p>
                            <strong>Restaurant</strong> : {ele.rname}
                          </p>
                          <p>
                            <strong>Price</strong>: ₹ {ele.price}
                          </p>
                          <p>
                            <strong>Dishes</strong> : {ele.address}
                          </p>
                          <p>
                            <strong>Total</strong>: ₹ {ele.price * ele.qnty}
                          </p>
                          <div
                            className="mt-5 d-flex justify-content-between align-items-center"
                            style={{
                              width: 100,
                              cursor: "pointer",
                              background: "#ddd",
                              color: "#111",
                            }}
                          >
                            <span
                              style={{ fontSize: 20 }}
                              onClick={
                                ele.qnty <= 1
                                  ? () => dlt(ele.id)
                                  : () => remove(ele)
                              }
                            >
                              -
                            </span>
                            <span style={{ fontSize: 20 }}> {ele.qnty} </span>
                            <span
                              style={{ fontSize: 20 }}
                              onClick={() => send(ele)}
                            >
                              +
                            </span>
                          </div>
                        </td>
                        <td>
                          <p>
                            <strong>Rating</strong> :
                            <span
                              style={{
                                background: "green",
                                padding: "2px",
                                borderRadius: "4px",
                              }}
                            >
                              {ele.rating}★
                            </span>
                          </p>
                          <p>
                            <strong>Order Review</strong>: {ele.somedata}
                          </p>
                          <p>
                            <strong>Remove</strong> :
                            <DeleteForeverIcon
                              onClick={() => dispatch(dlt(ele.id))}
                              style={{ color: "red" }}
                            />
                          </p>
                        </td>
                      </tr>
                    </Table>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CardsDetails;
