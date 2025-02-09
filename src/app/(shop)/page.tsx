import { ProductGrid, Title } from '@/components';
// import { initialData } from '@/utils/service';
import axios from 'axios';


const response = await axios.get('https://67a681cf510789ef0dfb946c.mockapi.io/api/v1/productos');
const initialData = response.data;
const products = initialData;


export default async function Home() {

    return (
      <>
        <Title title="Tienda" subtitle="Todos los productos" />
        <ProductGrid products={products} />
      </>
    );
}

// export default function Home({}) {

//   const response = await axiosInstance.get('/');
//   const initialData = response.data;

//   console.log(initialData)
//   // const products = initialData.products;

//   return (
//     <>
//       <Title title="Tienda" subtitle="Todos los productos"/>
//       <ProductGrid products={initialData} />
//     </>
//   );
// }
