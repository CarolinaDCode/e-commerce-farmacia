import { TopMenu } from '@/components';

export default function ShopLayout(props: { children: React.ReactNode }) {
    return (
        <main className="min-h-screen">
            <TopMenu />
            { props.children }
        </main>
    );
}












// import { TopMenu } from '@/components';

// export default function ShopLayout({ children }:{
//     children: React.ReactNode;
// }){
//     return (
//         <main className="min-h-screen">
//             <TopMenu />
//             { children }
//         </main>
//     )
// }