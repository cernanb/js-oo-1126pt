const btnEl = document.getElementById('btn')
var petsJSON = [
    {name: 'Whiskers', age: 4 , type: 'cat'},
    {name: 'Sampson', age: 13 , type: 'dog'},
    {name: 'Oliver', age: 6 , type: 'dog'},
    {name: 'Bug', age: 3 , type: 'dog'},
    {name: 'Benji', age: 7 , type: 'dog'},
    {name: 'Waffles', age: 6 , type: 'dog'},
]


class Pet {
    constructor(name, age, type) {
        this.name = name
        this.age = age
        this.type = type
    }
    
    renderName() {
        return `<h1>Name: ${this.name}</h1>`
    }
    
    renderAge() {
        return `<h3>Age: ${this.age}</h3>`
    }
    
    renderHTML() {
        var html = `
        ${this.renderName()}
        ${this.renderAge()}
        <h5>${this.type}</h5>
        `
        var appEl = document.getElementById('app')
        appEl.innerHTML += html
    }
}



btnEl.addEventListener('click', function() {
    var appEl = document.getElementById('app')
    appEl.innerHTML = ''
    
    setTimeout(function() {
        petsJSON.forEach(function(petData) {
            var newPet = new Pet(petData.name, petData.age, petData.type)
            newPet.renderHTML()
        })
    }, 1000)
})
