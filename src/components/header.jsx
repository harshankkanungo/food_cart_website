import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { NavLink } from "react-router-dom";
import Menu from "@mui/material/Menu";
import CancelIcon from "@mui/icons-material/Cancel";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { REMOVE } from "../redux/actions/action";

const Header = () => {
  const show = useSelector((state) => state.cartreducer.carts);
  console.log(show);
  const [price, setPrice] = useState(0);
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const Total = () => {
    let price = 0;
    show.map((ele, k) => {
      price = ele.price * ele.qnty + price;
    });
    setPrice(price);
  };

  useEffect(() => {
    Total();
  }, [Total]);
  const dlt = (id) => {
    dispatch(REMOVE(id));
  };

  return (
    <div>
      <header>
        <Navbar bg="dark" data-bs-theme="dark" className="Navbar">
          <Container>
            <img
              src="https://preply.com/wp-content/uploads/2018/04/shopping_bags.jpg"
              alt="market"
              className="shop_logo"
            />
            <Nav className="me-auto">
              <NavLink to="/" className="text-light text-decoration-none my">
                Home
              </NavLink>
              <NavLink
                to="/carts/:id"
                className="text-light text-decoration-none my"
              >
                Add Carts
              </NavLink>
            </Nav>

            <Badge
              badgeContent={show.length}
              color="primary"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <ShoppingCartIcon style={{ fontSize: "30px" }} />
            </Badge>
          </Container>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {show.length ? (
              <div
                className="card_details"
                style={{ width: "24rem", padding: "8px" }}
              >
                <Table>
                  <thead>
                    <tr>
                      <th>Photo</th>
                      <th>Restaurant Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {show.map((val) => {
                      return (
                        <tr>
                          <td>
                            <NavLink
                              to={`carts/${val.id}`}
                              onClick={handleClose}
                            >
                              <img
                                src={val.imgdata}
                                alt=""
                                style={{ width: "5rem", height: "5rem" }}
                              />
                            </NavLink>
                          </td>
                          <td>
                            <p> {val.rname}</p>
                            <p>Price : ₹ {val.price}</p>
                            <p>Quantity : {val.qnty}</p>
                            <p
                              style={{
                                color: "red",
                                fontSize: 20,
                                cursor: "pointer",
                              }}
                              className="smalltrash"
                              onClick={() => dlt(val.id)}
                            >
                              <DeleteForeverIcon />
                            </p>
                          </td>
                          <td>
                            <p
                              style={{ color: "red" }}
                              className="largetrash"
                              onClick={() => dlt(val.id)}
                            >
                              <DeleteForeverIcon />
                            </p>
                          </td>
                        </tr>
                      );
                    })}
                    <div className="text-center">Total : ₹ {price}</div>
                  </tbody>
                </Table>
              </div>
            ) : (
              <div
                className="card_details d-flex justify-content-center align-items-center"
                style={{
                  maxWidth: "24rem",
                  padding: "4px",
                  position: "relative",
                }}
              >
                <CancelIcon
                  style={{
                    position: "absolute",
                    top: 2,
                    right: 10,
                    cursor: "pointer",
                  }}
                />
                <p>Your Cart Is Empty</p>
                <img
                  src="https://cdn.dribbble.com/users/249246/screenshots/2958948/shopping.gif"
                  alt=""
                  style={{ width: "120px", padding: "4px" }}
                />
              </div>
            )}
          </Menu>
        </Navbar>
      </header>
    </div>
  );
};

export default Header;
