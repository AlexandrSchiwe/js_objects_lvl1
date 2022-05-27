// console.log("works");

// Objects Level 1.2

// let person = {
//     name: 'alex',
//     alter: 28,
//     sagNameAlter: function () {
//         alert(person.name + person.alter);
//         console.log(person);
//     }
// }

// person.sagNameAlter();

// Objects 1.4

// let unsereHaustiere = [
//     {
//         tiertyp: "Katze",

//         names: [
//             "Gipsy",
//             "Nala",
//             "Dinky"
//         ],
//     },
//     {
//         tiertyp: "Hunde",
//         names: [
//             "Knöpfchen",
//             "Pinselchen",
//             "Droopy"
//         ]
//     }


// ];

// console.log();



// Objects 1.5

let unserLager = {
    schreibtisch: {
        schublade: "Hefter"
    },
    schrank: {
        "Obere Schublade": {
            Ordner1: "Dokumente",
            Ordner2: "Geheimnisse"
        },
        "Untere Schublade": "Cola"
    }
};

console.log(unserLager.schrank["Obere Schublade"].Ordner2);
console.log(unserLager.schrank["Untere Schublade"]);
console.log(unserLager.schreibtisch.schublade)

// Objects 1.6

let myMusic = [
    {
        artist: "The Beatles",
        title: "Abbey Road",
        release_year: 1969,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true
    },
    {
        artist: "Pink Floyd",
        title: "Dark Side of the Moon",
        release_year: 1978,
        medium: ["CS", "CD", "LP", "Download"],
        gold: true
    },
    {
        artist: "Led Zeppelin",
        title: "Led Zeppelin IV",
        release_year: 1971,
        medium: ["CS", "LP", "Download"],
        gold: true
    },
    {
        artist: "Metallica",
        title: "Kill ’Em All und Ride the Lightning",
        release_year: 1983,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true
    }
];

let artist = "Queen";
let title = "Bohemian Rhapsody";
let release_year = 1975;
let medium = ["CS", "CD", "Download"];
let gold = true;

myMusic.push([artist, title, release_year, medium, gold]);


console.log(myMusic);
console.log(myMusic[0].artist);
console.log(myMusic[1].medium[3]);
console.log(myMusic[1].gold)
console.log(myMusic[2].release_year);
console.log(myMusic[3].release_year);
console.log(myMusic[3].medium[2]);
console.log(myMusic[3].title.slice(17, 21));
console.log(myMusic[2].title.slice(13));
console.log(myMusic[1].artist.slice(5));
