const celcius = {
    fahrenheit: function(C) {
        return (9/5*C)+32
    },
    reamur: function(C) {
        return 4/5*C
    },
    kelvin: function(C) {
        return C+273.15
    },
    convert: function(C) {
        let F = 0
        let K = 0
        let R = 0
        F = this.fahrenheit(C)
        K = this.kelvin(C)
        R = this.reamur(C)
        console.log("Celcius: "+C)
        console.log("Fahrenheit: "+F)
        console.log("Reamur: "+R)
        console.log("Kelvin: "+K)
    }
}

celcius.convert(100)