import { Product } from '@/interfaces';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
    product: Product;
}

export const ProductGridItem = ({product}: Props) => {
    return (
        <div className="rounded-md overflow-hidden fade-in">
            <Image 
                src={`${product.image}`}
                alt={product.name}
                className="w-full object-cover"
                width={500}
                height={500}
                unoptimized
            />

            <div className="p-4 flex flex-col">
                <Link href={`/product/${product.name}`}>
                    { product.name }
                </Link>
                <span className="font-bold">Precio: ${product.price}</span>
                <span>Precio de Oferta: ${product.offer_price}</span>
            </div>
            <button>Agregar al Carrito</button>
        </div>
    )
}