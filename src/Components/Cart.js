import { useSelector, useDispatch } from "react-redux";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import { remove } from "./Store/CartSlice";

const Cart = () => {
    const products = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const removeFromCart = (id) => {
        dispatch(remove(id));
    };

    const cards = products.map(product => (
        <div key={product.id} className="col-12 col-md-6 col-lg-4 mb-3">
            <Card className="h-100 shadow-sm">
                <div className="text-center p-2">
                    <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px', objectFit: 'contain' }} />
                </div>
                <Card.Body>
                    <Card.Title className="text-truncate" title={product.title}>{product.title}</Card.Title>
                    <Card.Text>INR: {product.price}</Card.Text>
                </Card.Body>
                <Card.Footer className="text-center" style={{ background: "white" }}>
                    <Button variant="danger" onClick={() => removeFromCart(product.id)}>Remove Item</Button>
                </Card.Footer>
            </Card>
        </div>
    ));

    return (
        <div className="container">
            <h1 className="my-4 text-center">My Cart</h1>
            <div className="row">
                {products.length > 0 ? cards : <p className="text-center">Your cart is empty.</p>}
            </div>
        </div>
    );
};

export default Cart;
