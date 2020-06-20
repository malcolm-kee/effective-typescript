// type Product = {
//     name: string;   
//     availableStock: number;
//     type: string; // physical/digital
// }

// const products: Product[] = [];

// products.push({
//     name: 'Training',
//     availableStock: 100,
//     type: 'Digital' // oops
// });

// function fetchData(url: string, type = 'json') {
//     return fetch(url).then(res => {
//         if (res.ok) {
//             return res[type]()
//         }
//     })
// }