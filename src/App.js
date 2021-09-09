import { BrowserRouter as Router,HashRouter, Switch, Route, Link } from "react-router-dom";
import Header from "./layout/Header";
import Menu from "./layout/Menu";
import Slider from "./layout/Slider";
import Home from "./screens/Home";
import Sidebar from "./layout/Sidebar";
import Footer from "./layout/Footer";
import ListProduct from "./screens/ListProduct";
import ProductDetail from "./screens/ProductDetail";
import MyCart from "./screens/MyCart";
import OrderSuccess from "./screens/OrderSuccess";
import SearchList from "./screens/SearchList";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <div id="body">
          <div class="container">
            <Menu />
            <div class="row">
              <div id="main" class="col-lg-8 col-md-12 col-sm-12">
                <Slider />
                <Switch>
                  <Route exact path="/" component ={Home} />
                  <Route exact path="/ListProduct" component ={ListProduct} />
                  <Route exact path="/ProductDetail/:id" component ={ProductDetail} />
                  <Route exact path="/MyCart" component ={MyCart} />
                  <Route exact path="/SearchList" component ={SearchList} />
                  <Route exact path="/OrderSuccess" component ={OrderSuccess} />
                </Switch>
              </div>
              <Sidebar />
            </div>
          </div>
        </div>

        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
