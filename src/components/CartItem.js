import React, { Component } from "react";

export default class CartItem extends Component {
  render() {
    return (
      <tr>
        <th scope="row">1</th>
        <td>Lorem ipsum.</td>
        <td>12 USD</td>
        <td>
          <input
            name="cart-item-quantity-1"
            type="number"
            defaultValue={1}
            min={1}
          />
        </td>
        <td>
          <strong>12 USD</strong>
        </td>
        <td>
          <a type="button"  href="/#"
            className="label label-info update-cart-item"
            data-product=""
          >
            Update
          </a>
          <a type='button' href="/#"
            className="label label-danger delete-cart-item"
            data-product=""
          >
            Delete
          </a>
        </td>
      </tr>
    );
  }
}
