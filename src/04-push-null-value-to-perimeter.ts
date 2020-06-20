// type Payment = {
//     channel: 'cash' | 'creditCard' | 'onlineBanking';
//     amount: number;
//     details?: {
//         bank?: {
//             bankName?: string;
//             country?: string;
//         }
//         card?: {
//             expiryDate: string;
//             maskedNumber?: string;
//             cvr?: string;
//         }
//     }
// }

// export function getPaymentDescription(method: Payment) {
//     let detailsText = '';

//     if (method.details?.bank?.bankName) {
//         detailsText += method.details.bank.bankName + '\n';
//     }
    
//     if (method.details?.bank?.country) {
//         detailsText += method.details.bank.country + '\n';
//     }

//     if (method.details?.card?.maskedNumber) {
//         detailsText += method.details.card.maskedNumber + '\n';
//     }

//     if (method.details?.card?.expiryDate) {
//         detailsText += 'Expiry: ' + method.details.card.expiryDate + '\n';
//     }

//     return detailsText;
// }

// getPaymentDescription({
//     channel: 'creditCard',
//     amount: 30,
//     details: {
//         card: {
//             expiryDate: '04/22'
//         }      
//     }
// })