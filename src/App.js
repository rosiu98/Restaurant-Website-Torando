import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <Router>
      <Route path="/" component={HomeScreen} exact />
      <Route path="/menu/:id" component={ProductScreen} />
    </Router>
  );
}

export default App;
