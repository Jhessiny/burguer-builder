import React, { Component } from "react";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Button from "../../../components/UI/Button/Button";
import axios from "../../../axios-orders";

import classes from "./ContactData.css";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
    loading: false,
  };

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Jhess",
        address: {
          street: "Teststreet 1",
          zipCode: "23243r",
          country: "Brazil",
        },
        email: "jhess@gmail.com",
      },
      deliveryMethod: "fastest",
    };
    axios
      .post("/orders.json", order) //.json for firebase
      .then((res) => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
  };

  render() {
    let form = (
      <form action="">
        <input type="text" name="name" placeholder="name" />
        <input type="email" name="email" placeholder="email" />
        <input type="text" name="street" placeholder="Street" />
        <input type="text" name="postal" placeholder="PostalCode" />
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your contect data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
