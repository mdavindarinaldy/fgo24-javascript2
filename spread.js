// fgo24-javascript2

// data[0][1][3].string[1].value / Hello!

const data = [["x", ["x","x","x",{
    string: ["x", {
        value: "hello"
    }]
}]]]

const newData = ["x", ["x","x","x",{
    string: ["x", {
        value: "Selamat pagi!"
    }]
}]]

data[0] = [...newData] 

console.log(data[0][1][3].string[1].value)

const baru = {
    value : "haaaaiii"
}

data[0][1][3].string[1] = {...baru}

console.log(data[0][1][3].string[1].value)


// case kedua

const bio = {
    name: "John O'Connor",
    age: 30
}

const extraInfo = {
    skills : ["Web Programming", "Painting"],
    education : [{
        name : "SMP 1 Denpasar",
        year : 2012
    }]
}

const newInfo = {
    skills : ["Hiking"],
    education: [ {
        name : "SMA 1 Denpasar",
        year : 2015
    }, {
        name : "Universitas Denpasar",
        year : 2019
    }]
}

extraInfo.skills = [...extraInfo.skills, ...newInfo.skills]
extraInfo.education = [...extraInfo.education, ...newInfo.education]

const profile = {
    ...bio,
    ...extraInfo
}

console.log(profile)