import Carousel from "react-bootstrap/Carousel";
import { Container, Image, ModalTitle } from "react-bootstrap";
import { useLocation } from "react-router-dom";

function DetalleProducto() {
    const {state} = useLocation();
    

    return (
        <Container style={{display: "flex", flexDirection: "row"}}>
            <Carousel>
                {
                    state.producto.images.map((image) => (
                    <Carousel.Item>
                        <Image src={image}/>
                    </Carousel.Item>))
                }
            </Carousel>

            <Container>
                <h1>{state.producto.title}</h1>
                <div>{state.producto.description}</div>
                <h3>{state.producto.price} USD</h3>
                <div>{state.producto.stock} productos en stock</div>
                <div>Producto de {state.producto.brand}</div>
                <div>Rating {state.producto.rating}/5</div>
                <div>Categoria: {state.producto.category}</div>
            </Container>
        </Container>
    );
}

export default DetalleProducto;