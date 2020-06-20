// type Payment = {
//     channel: 'cash' | 'creditCard' | 'onlineBanking';
//     amount: number;
//     details?: {
//         bankName: string;
//         maskedNumber?: string;
//         bankAccountNumber?: string;
//     }
// }

// export function getPaymentDescription(payment: Payment) {
//     switch (payment.channel) {
//         case 'cash':
//             return `Cash ${payment.amount}`;

//         case 'creditCard':
//             return `Credit Card ${payment.amount}, ${payment.details?.bankName} ${payment.details?.maskedNumber}`

//         case 'onlineBanking':
//             return `Online Banking ${payment.amount}, ${payment.details?.bankName} ${payment.details?.bankAccountNumber}`
    
//         default:
//             return '';
//     }
// }

// getPaymentDescription({
//     channel: 'creditCard',
//     amount: 500,
//     details: {
//         bankName: 'CIMB',
//         bankAccountNumber: '1928347'
//     }
// })