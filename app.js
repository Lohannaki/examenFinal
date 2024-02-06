import { Country } from "./Country";
import { Game } from "./Game";
import { shuffle } from "lodash";


const getData = async () => {
    const button = document.querySelector('button'); 
    const input = document.querySelector('input')

    const apiUrl = "https://restcountries.com/v3.1/all"; 
    const response = await fetch(apiUrl); 

    if (!response.ok) {
        throw new Error ('Could not retrieve data'); 
    }

    let responseData = await response.json();

    responseData = shuffle(responseData); 
    
    const game1 = new Game(responseData); 

    button.addEventListener('click', (e) => {
        e.preventDefault();

        game1.addPoint(input.value); 
    
    })

}

getData(); 



