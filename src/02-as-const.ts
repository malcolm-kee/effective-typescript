/*
 * `as const` is called "const assertion".
 * We can use it to mark a variable as immutable,
 * allowing better type inference from typescript
 */

// function fetchData(url: string, type: 'json' | 'text' | 'blob' = 'json') {
//     return fetch(url).then(res => {
//         if (res.ok) {
//             return res[type]()
//         }
//     })
// }

// const EXTERNAL_DATA_SOURCES = [
//     {
//         url: 'https://pokemon-json.herokuapp.com/api/pokedex',
//         type: 'json'
//     },
//     {
//         url: 'https://countries.trevorblades.com/',
//         type: 'text'
//     },    
// ]

// EXTERNAL_DATA_SOURCES.forEach(source => {
//     fetchData(source.url, source.type)
// })

// function useToggle(initialOn: boolean) {
//     const [on, setOn] = React.useState(initialOn)
//     const toggle = () => setOn(o => !o);
//     return [on, toggle]
// }

// const [on, toggle] = useToggle(true);

// toggle();