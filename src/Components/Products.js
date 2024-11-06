import { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { add } from './Store/CartSlice';
import { getProducts } from './Store/productSlice';

const Product = () => {
    const dispatch = useDispatch();
    const { data: products = [], status } = useSelector(state => state.products);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(getProducts());
        }
    }, [status, dispatch]);

    if (status === 'loading') {
        return <p>Loading...</p>;
    } else if (status === 'error') {  // Use 'error' instead of 'failed'
        return <p>Something went wrong! Please try again later.</p>;
    }

    const addToCart = (product) => {
        dispatch(add(product));
    };

    const cards = products.map(product => (
        <div key={product.id} className="col-6 col-md-4 col-lg-3 mb-4">
            <Card className="h-100 shadow-sm border-0">
                <div className="text-center p-3">
                    <Card.Img variant="top" src={product.image} style={{ width: '90px', height: '120px', objectFit: 'contain' }} />
                </div>
                <Card.Body className="d-flex flex-column">
                    <Card.Title className="text-truncate" title={product.title}>{product.title}</Card.Title>
                    <Card.Text className="fw-bold">
                        ${product.price.toFixed(2)}
                    </Card.Text>
                    <div className="mt-auto">
                        <Button variant="primary" className="w-100" onClick={() => addToCart(product)}>Add To Cart</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    ));

    return (
        <div className="container">
            <h1 className="my-5 text-center display-6">Products Dashboard</h1>
            <div className="row">
                {cards}
            </div>
        </div>
    );
};

export default Product;
