import { BrowserRouter as Router, Route } from "react-router-dom";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import OrderScreen from "./screens/OrderScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import ProductScreen from "./screens/ProductScreen";
import ProfileScreen from "./screens/ProfileScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ShippingScreen from "./screens/ShippingScreen";

function App() {
  return (
    <Router>
      <Route path="/order/:id" component={OrderScreen} />
      <Route path="/placeorder" component={PlaceOrderScreen} />
      <Route path="/payment" component={PaymentScreen} />
      <Route path="/shipping" component={ShippingScreen} />
      <Route path="/profile" component={ProfileScreen} />
      <Route path="/register" component={RegisterScreen} />
      <Route path="/login" component={LoginScreen} />
      <Route path="/menu/:id" component={ProductScreen} />
      <Route path="/cart/:id?" component={CartScreen} />
      <Route path="/" component={HomeScreen} exact />
    </Router>
  );
}

export default App;
