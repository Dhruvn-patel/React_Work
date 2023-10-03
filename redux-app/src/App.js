import products from "./products.json";
import "./App.css";
import Product from "./components/Product";
import { useSelector } from "react-redux";
import { getSelectorItems } from "./store/slices/cart.slice";
import { Link } from "react-router-dom";

function App() {
  const items = useSelector(getSelectorItems);
  const price = items.reduce((a, b) => {
    return a + b.price;
  }, 0);
  return (
    <div className="App">
      <div className="cart-data">
        <h3 className="text-center">Total Items: {items.length}</h3>
        <p>Total Price:(Rs. {price})/-</p>
      </div>
      <div>
        <Link to="/cart">
          <button>Cart</button>
        </Link>
      </div>
      <div className="products">
        {products.map((product, index) => (
          <Product key={index} {...product} />
        ))}
      </div>
    </div>
  );
}

export default App;
