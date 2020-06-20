namespace Script {
    export function exec() {
        console.log('exec!')
    }
 
    export function min(...nums: number[]) {
        return Math.min(...nums)
    }
}