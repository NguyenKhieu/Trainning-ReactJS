import React from "react";
import Header from "../layout/Header";
import Menu from "../layout/Menu";
import Slider from "../layout/Slider";

import Sidebar from "../layout/Sidebar";
import Footer from "../layout/Footer";


function OrderSuccess() {
  return (
    <div id="order-success">
    <div class="row">
        <div id="order-success-img" class="col-lg-3 col-md-3 col-sm-12"></div>
          <div id="order-success-txt" class="col-lg-9 col-md-9 col-sm-12">
            <h3>bạn đã đặt hàng thành công !</h3>
              <p>Vui lòng kiểm tra email để xem lại thông tin đơn hàng của mình.</p>
          </div>
      </div>    
  </div>
    
  );
}

export default OrderSuccess;
