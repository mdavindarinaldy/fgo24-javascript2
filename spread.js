// fgo24-javascript2

// data[0][1][3].string[1].value / Hello!

const data = [["x", ["x","x","x",{
    string: ["x", {
        value: "hello"
    }]
}]]]

const newData = [["x", ["x","x","x",{
    string: ["x", {
        value: "Selamat pagi!"
    }]
}]]]

data[0] = [...newData[0]] 

console.log(data[0][1][3].string[1].value)
