/* avoid enum if possible */
// enum PaymentChannel {
//     cash = 'cash',
//     creditCard = 'creditCard',
//     onlineBanking = 'onlineBanking'
// }

// type Payment = {
//     id: number;
//     channel: PaymentChannel;
//     amount: number;
//     bankName?: string;
// }

// export function getPaymentDescription(payment: Payment) {
//     const channel = payment.channel;
//     const id = payment.id;
//     const amount = payment.amount;

//     return `Payment ${channel} (${id}): ${amount}`
// }

// getPaymentDescription({
//     id: 3,
//     channel: 'cash',
//     amount: 20
// })

// const PAYMENT_CHANNELS = ['cash', 'creditCard', 'onlineBanking'] as const;
// type Channel = typeof PAYMENT_CHANNELS[number]

/* avoid namespace and triple-slash */
// /// <reference path="07r-namespace-module.ts" />

// Script.min()