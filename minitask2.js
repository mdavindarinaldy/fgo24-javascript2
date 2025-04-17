const phi = 3.14
let k = 0
let l = 0

const circle = (r) => {
    k = 2 * phi * r
    l = phi * r * r
    console.log(`${k} dan ${l}`)
}

circle(7)