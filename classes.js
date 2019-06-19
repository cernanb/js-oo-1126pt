// Blueprint for what an artist looks like
// Method to create new instances of an artist

class Artist {

    constructor(artistData) {
        this.name = artistData.name
        this.age = artistData.age
        this.bestSong = artistData.bestSong
        this.songs = artistData.songs.concat(this.bestSong)
    }

    sing() {
        console.log(`I will sing ${this.bestSong}`)
    }

    yellAge() {
        console.log(`I AM ${this.age} years old`)
    }

    addSong(songName) {
        this.songs.push(songName)
    }

    brag() {
        console.log(`I've sung ${this.songs.length} songs!`)
    }
}


var adele = new Artist({name: 'Adele', age: 36, bestSong: 'Hello', songs: []})
adele.addSong('This is my next song')
adele.addSong('Another one')
adele.brag()

// var florence = new Artist('Florence and the Machine', 54, 'We are the Machine')
// florence.sing()