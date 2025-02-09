export interface Product {
    id: string;
    name: string;
    description: string;
    image: string;
    creationDate: Date;
    price: number;
    offer: number;
    promoted: boolean; //promoted
    featured: boolean; //feature_product
    barCode: string;
    presentation: string;
    category: string;
    state: boolean
}