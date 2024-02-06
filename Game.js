import { Country } from "./Country";

export class Game {
    
    #score = 0; 
    constructor (countries) {
        this.countries = countries; 
        this.countryIndex = 0; 
        this.currentCountry = new Country(this.countries[this.countryIndex]); 
        this.currentCountry.render(); 
    }; 

    addPoint (awnser) {
        if (this.currentCountry.checkAwnser(awnser)) {
            this.#score += 1; 
            console.log("the awnser is true"); 
            document.querySelector('main').innerHTML = ''; 
            this.nextGame(); 
        } else {
            this.#score = 0; 
            console.log("nope"); 
        }
    }; 

    isGameOver () {
        if (this.countryIndex >= this.countries.length) {
            this.over = true; 
        } else {
            this.over = false; 
        }; 
        console.log(this.over); 
    return this.over; 
    }; 

    nextGame () {
        if (this.isGameOver()) {; 
        } else {
            this.countryIndex += 1; 
            this.currentCountry = new Country(this.countries[this.countryIndex]); 
            this.currentCountry.render(); 
        }
    }
}; 