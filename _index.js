// Spread Operator bisa digunakan untuk array maupun object

const arr1 = ["Halo"]
const arr2 = ["Selamat", "Pagi"]

const arr3 = [...arr1, ...arr2] // hasilnya array satu dimensi

const bio = {
     name: "John O'Conner",
     age: 30
}

const extraInfo = {
    education: "SMP 1 Denpasar"
}

const profile = {
    ...bio,
    ...extraInfo
}

// destructuring

const profilePerson = {
    name : "John O'Connor",
    age: 30,
    skills: ["Web Programming", "Painting"],
    education : {
        name : 'Universitas Udayana',
        year : '2018'
    }
}

const {skills:[wp], age, name:fullName} = profilePerson //nested destructing
const {skills:anotherSkills} = structuredClone(profilePerson)
const {name:universityName} = profilePerson.education

anotherSkills[2] = "Hiking"

console.log(wp)
console.log(age)
console.log(anotherSkills)
console.log(universityName)

// METHOD

const obj = {
    name: "Agung",
    age: 30,
    skills: ["Web Programming", "Swimming"],
    greetings: function() { // function anonymous
        console.log(`Halo ${this.name}`)
        console.log('Anda memiliki skills: ')
        for (let x=0; x<this.skills.length; x++) {
            console.log(this.skills[x])
        }

    }
}

obj.name = "John"
obj.skills[2] = "Hiking"

obj.greetings()
