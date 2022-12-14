export interface Order {
    _id:string;
    table:string;
    status:'WAITING' | 'IN_PRODUCTION' | 'DONE';
    products:Array<{
        _id:string;
        quantity:number;
        product:{
            name:string;
            imagePath:string;
            price:number;
        }
    }>;
}

//Outra forma de fazer
// export interface Order {
//     _id:string;
//     table:string;
//     status:string;
//     products:{
//         _id:string;
//         quantity:number;
//         product:{
//             name:string;
//             imagePath:string;
//             price:string;
//         }
//     }[];
// }
