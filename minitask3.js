const obj = {
    fahrenheit: function(C) {
        console.log("Fahrenheit: "+((9/5*C)+32))
    },
    reamur: function(C) {
        console.log("Reamur: "+(4/5*C))
    },
    kelvin: function(C) {
        console.log("Kelvin: "+(C+273.15))
    },
    konversi: function(C) {
        console.log("Celcius: "+C)
        this.fahrenheit(C)
        this.kelvin(C)
        this.reamur(C)
    }
}

obj.konversi(100)