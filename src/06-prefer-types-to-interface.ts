// interface Payment {
//     id: number;
//     channel: 'cash' | 'creditCard' | 'onlineBanking';
//     amount: number;
//     bankName?: string;
// }

// export function getPaymentDescription(payment: Payment) {
//     const channel = payment.channel;
//     const id = payment.id;
//     const amount = payment.amount;

//     return `Payment ${channel} (${id}): ${amount}`
// }

/* type can be extended */
// interface OnlinePayment extends Payment {
//     emailAddress: string;
// }

/* type can be implemented */
// class OnlineStorePayment implements Payment {
//     id: number;
//     channel: 'creditCard' | 'onlineBanking';
//     amount: number;
    
//     constructor(id: number, channel: OnlineStorePayment['channel'], amount = 0) {
//         this.id = id;
//         this.channel = channel;
//         this.amount = amount;
//     }
// }

/* type cannot be merged while interface can */
// type Shape = {
//     x: string;
// }

// type Shape = {
//     y: string
// }

// interface XShape {
//     x: string;
// }

// interface XShape {
//     y: string
// }

// const shape: XShape = {
//     x: '23',
//     y: '23'
// }