import { geistSans } from '@/config/font';
import Link from 'next/link';

export const PageNotFound = () => {
    return(
        <div className="flex flex-colreverse md-flex-row h-[800px] w-full justify-center items-center align-middle">
            <div className="text-center px-5 mx-5">
                <h2 className={`${ geistSans.className} antialiased text-9xl`}>402</h2>
                <p className="font-semibold text-xl"> Upss, Lo siento mucho</p>
                <p>
                    <span>Puedes regresar al </span>
                    <Link href='/' className="font-normal hover:underline transition-all">
                        Inicio
                    </Link>
                </p>
            </div>
        </div>
    )
}