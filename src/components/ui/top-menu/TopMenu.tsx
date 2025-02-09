'use client';
import { titleFont } from '@/config/font';
import { IoCartOutline } from 'react-icons/io5';
import { Search } from './search/Search';
import Link from 'next/link';

export const TopMenu = () => {

    return(
        <nav className="flex px-5 justify-between items-center w-full">
            <div>
                <Link href="/">
                    <span className={`${titleFont.className} antialiased font-bold`}>Farma</span>
                    <span > | Shop</span>
                </Link>
            </div>
            <div className="hidden sm:block">
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href="/category/medicamentos">Medicamentos</Link>
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href="/category/suplementos">Suplementos</Link>
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href="/category/cuidadopersonal">Cuidado Personal</Link>
            </div>
            <div className="flex items-center">
                <Search />
                <Link href="/cart" className="mx-2">
                    <div className="relative">
                        <span className="absolute text-xs px-1 rounded-full font-bold -top-2 -right-2 bg-blue-700 text-white">3</span>
                        <IoCartOutline className="w-5 h-5"/>
                    </div>
                </Link>

                <button className="m-2 p-2 rounded-md transition-all hover:bg-gray-100">
                    Menú
                </button>
            </div>
        </nav>
    )
}