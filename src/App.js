import { BrowserRouter as Router, Route } from "react-router-dom";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import ProductScreen from "./screens/ProductScreen";
import RegisterScreen from "./screens/RegisterScreen";

function App() {
  return (
    <Router>
      <Route path="/register" component={RegisterScreen} />
      <Route path="/login" component={LoginScreen} />
      <Route path="/menu/:id" component={ProductScreen} />
      <Route path="/cart/:id?" component={CartScreen} />
      <Route path="/" component={HomeScreen} exact />
    </Router>
  );
}

export default App;
