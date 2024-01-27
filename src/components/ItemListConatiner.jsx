import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [titulo, setTitulo] = useState("Productos");

  const { categoria } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Categoría:", categoria);

        const productosRef = collection(db, "productos");
        const q = categoria ? query(productosRef, where("categoria", "==", categoria)) : productosRef;
        const resp = await getDocs(q);

        console.log("Datos de Firestore:", resp.docs.map(doc => doc.data()));

        setProductos(
          resp.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          })
        );

        if (categoria) {
          const tituloCapitalizado = categoria.charAt(0).toUpperCase() + categoria.slice(1);
          console.log("Nuevo título:", tituloCapitalizado);
          setTitulo(tituloCapitalizado);
        } else {
          console.log("Nuevo título: Productos");
          setTitulo("Productos");
        }
      } catch (error) {
        console.error("Error al obtener datos:", error);
        setTitulo("Productos");
      }
    };

    fetchData();
  }, [categoria]);

  return (
    <div>
      <ItemList productos={productos} titulo={titulo} />
    </div>
  );
};

export default ItemListContainer;