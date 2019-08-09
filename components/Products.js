const Product =(props) =>{

  const { product } = props;
  return (

        <div className="card mb-3 mr-4">
          <h3 className="card-header">{product.name}</h3>

          <img
          src={product.images[0].src}
          alt="product image"/>
        <div className="card-body text-center">
            <h6 className="card-subtitle text-center">${product.price}</h6>
            <a href="#" className="btn btn-primary">Agregar</a>
        </div>

        </div>

  );
}
export default Product;
