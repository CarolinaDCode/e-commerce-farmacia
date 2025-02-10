"use client";

import { useEffect, useState } from 'react';
import { ProductGrid, Title } from '@/components';
import axios from 'axios';
import useStore from '@/store/useStore'; 

export default function Home() {
  const words = useStore(state => state.words);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://67a681cf510789ef0dfb946c.mockapi.io/api/v1/productos');
        setProducts(response.data);
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      }
    };
    fetchProducts();
  }, []);

  // producto.price.includes(357.50)
  const filteredProducts = products.filter(producto => 
    {
    if (words === "") return true;
    const nameMatch = producto.name.toLowerCase().includes(words.toLowerCase());
    const barcodeMatch = String(producto.bar_code).includes(words.toLowerCase());
    return nameMatch || barcodeMatch;
  }

);

  return (
    <>
      <Title title="Farma Shop" subtitle="Todos los productos" />
      <ProductGrid products={filteredProducts} />
    </>
  );
}
