"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import { notFound } from 'next/navigation';
import { useParams } from 'next/navigation';
import { ProductGrid, Title } from '@/components';

interface Props {
    params: {
        id: string
    }
}

// {params}: Props
export default function Page() {

    // const { id } = params;
    const { id } = useParams();

    // if (id === 'cuidadopersonal'){
    //     notFound();
    // }

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

    const categoryProduct = products.filter(producto => {
        if(id === "farmacia"){
            return producto.category === "Farmacia";
        }else if(id === "cuidadopersonal"){
            return producto.category === "cuidado personal";
        }else if(id === "dermatologiacosmetica"){
            return producto.category === "Dermatología Cosmética";
        }else if(id === "belleza"){
            return producto.category === "Belleza";
        }else if(id === "dispositivosmedicos"){
            return producto.category === "Dispositivos Médicos";
        }else if(id === "salud"){
            return producto.category === "Salud";
        }
    });

    return (
        <>
          <Title title="Artículos de" subtitle="Todos los productos" />
          <ProductGrid products={categoryProduct} />
        </>
    )
}