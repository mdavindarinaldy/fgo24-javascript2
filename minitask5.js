const mainFunction = (c, type, cb1, cb2) => {
    cb1(c)
    if (c) {
        return cb2(c, type)
    }
}

const typeChecker = (c, type) => {
    let result = 0
    switch (type) {
        case "f":
            console.log(`Hasil konversi: ${result = (9/5*c)+32}`)
            break;
        case "r":
            console.log(`Hasil konversi: ${result = (4/5*c)}`)
            break;
        case "k":
            console.log(`Hasil konversi: ${result = c + 273}`)
    }
}

mainFunction(50, "f", function(c) {
    if (typeof c != "number") {
        return 
    } else {
        return c
    }
}, typeChecker)