const mainFunction = (x1, cb) => {
    return cb (x1)
}

const oddEven = (y1) => {
    if (y1 > 0) {
        if (y1 % 2 == 0) {
            return "genap"
        } else if (y1 % 2 != 0) {
            return "ganjil"
        } 
    } else {
        return
    }
}

console.log(mainFunction(5,oddEven))