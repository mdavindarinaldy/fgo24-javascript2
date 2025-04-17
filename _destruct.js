const data = [["x", ["x","x","x",{
    string: ["x", {
        value: "hello"
    }]
}]]]

const [[_a,[_b,_c,_d,{string:[_e,{value}]}]]] = data

console.log(value)
