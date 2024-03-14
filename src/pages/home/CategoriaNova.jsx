import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Item from "../../components/Item/NewItem";
import NewItem from "../../components/Item/NewItem";
import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../../state";
import { useParams } from 'react-router-dom';



  const Categoria = () => {
    const dispatch = useDispatch();
  //  const [value, setValue] = useState("all");
    const items = useSelector((state) => state.cart.items);
   // const breakPoint = useMediaQuery("(min-width:600px)");
  
    const { categoria } = useParams();
   // console.log(categoria)

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    async function getItems() {
      const items = await fetch(
        "http://localhost:1337/api/items?populate=image",
        { method: "GET" }
      );
      const itemsJson = await items.json();
      dispatch(setItems(itemsJson.data));
    }
  
    useEffect(() => {
      getItems();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
  



  const filtrado = items.filter(

    (item) => item.attributes.category === categoria
  
    );
  //  console.log(items,categoria)
 

  return (
    <>
        {
          filtrado.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))
          }
       
     </>
  );
};

export default Categoria;