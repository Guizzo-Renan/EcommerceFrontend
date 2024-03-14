import React, { useState, useEffect } from 'react';
//import Heading from "../Shared/Heading";; // Importe o componente Heading
import ProductCard from './NewProductCard'; // Importe o componente ProductCard
import Heading from "../Shared/Heading";

const Products = () => {
  const [apiData, setApiData] = useState([]); // Estado para armazenar os dados da API

  useEffect(() => {
    // Aqui você fará a chamada à sua API e atualizará o estado 'apiData'
    // Exemplo fictício, substitua pelo código real de chamada à API
    fetch('http://localhost:1337/api/items?populate=image')
      .then(response => response.json())
      .then(data => setApiData(data.data));      
  }, []); // Certifique-se de fornecer as dependências corretas aqui, para evitar chamadas infinitas

  // Função para transformar os dados da API no formato desejado
  const transformData = (apiData) => {
   
    return apiData.map(item => ({
      id: item.id,
      img: item.attributes.image.data.attributes.formats.thumbnail.url, // Usando a URL do formato "thumbnail"
      title: item.attributes.name,
      price: item.attributes.price,
      aosDelay: '200', // Substitua conforme necessário
      
    }));
    
  };

  const transformedData = transformData(apiData);

  return (
    <div>
      <div className="container">
        {/* Header section */}
        <Heading title="Our Products" subtitle={"Explore Our Products"} />
      
         {/* Body section */}
        <ProductCard data={transformedData} />
        <ProductCard data={transformedData} />
      </div>
    </div>
  );
};

export default Products;