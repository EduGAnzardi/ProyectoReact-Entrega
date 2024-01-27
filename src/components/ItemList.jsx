import Item from "./Item";


const ItemList = ({ productos, titulo }) => {
    
    return (
      <div className="container">
        <h2 className="main-title">{titulo}</h2>
  
        <div className="productos">
          {productos.map((prod) => (
            <Item key={prod.id || prod.otraPropiedadUnica} producto={prod} />
          ))}
        </div>
      </div>
    );
  };

export default ItemList
