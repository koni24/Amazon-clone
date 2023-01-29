import React, { Component } from "react";
import "./NavBar.css";
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="navbar_component">
        <div className="navbar_logo"></div>
        <div className="navbar_locator">
          <div className="navbar_locatorImage"></div>
          <div className="navbar_location">Bangalore</div>
        </div>
        <div className="navbar_searchcomponent">
          <div>
            <select className="nav_dropdown">
              <option value="All">All</option>
              <option value="Alexa">Alexa</option>
              <option value="Books">Books</option>
              <option value="Baby">Baby</option>
              <option value="Beauty">Beauty</option>
              <option value="Clothes">Clothes</option>
            </select>
          </div>
          <div>
            <input type="text" className="navbar_searchbox" />
          </div>
          <div className="navbar_searchboxdiv">
            <div className="navbar_searchicon"></div>
          </div>
        </div>
        <div className="navbar_text navbar_signin">
          <div style={{ fontSize: "14px" }}>Hello, Sign In</div>
          <div style={{ fontWeight: "bold" }}>Account & List</div>
        </div>
        <div className="navbar_text navbar_returns">
          <div style={{ fontSize: "14px" }}>Returns</div>
          <div style={{ fontWeight: "bold" }}> & Order</div>
        </div>
        {/* <Link to="/checkout"> */}
          <div className="navbar_text navbar_cart">
            <div src="" className="cart_image"></div>
            <div className="cart_item">0</div>
            <div className="navbar_text_cart">Cart</div>
          </div>
        {/* </Link> */}
      </div>
      <div></div>
      </div>
    );
  }
}
export default NavBar;
