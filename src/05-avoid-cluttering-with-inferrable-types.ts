// type Payment = {
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

// export function getPokemon(pokemonId: string) {
//     return fetch(`http://pokemon-json.herokuapp.com/api/pokedex/${pokemonId}`)
//     .then(res => res.text())
// }

// getPokemon('1')
// .then(pokemonDetails => {
//     console.log({pokemonDetails})
// })