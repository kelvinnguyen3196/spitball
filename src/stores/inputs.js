// imports
import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

import { usePokemonLocationStore } from './pokemonLocation.js';
import { useBoxCalculator } from '../use/boxCalculator.js';

// import all pokemon game stores
import { useScarletVioletStore } from './scarletviolet.js';

// use imports
const { getLocation } = useBoxCalculator();

export const useInputsStore = defineStore('inputs', () => {
    const games = [`Scarlet/Violet`];
    // inputs
    const selectedGame = ref(`${games[0]}`);
    const pokemon = ref(``);

    watch(pokemon, (newValue, oldValue) => {
        // use pokemon game imports
        const scarletViolet = useScarletVioletStore();
        // dynamically select which pokedex
        let pokedexMap;
        switch(selectedGame.value) {
            case `Scarlet/Violet`:
                pokedexMap = scarletViolet.pokedexMap;
                break;
        }
        // use location store
        const pokemonLocationStore = usePokemonLocationStore();
        // get box, row, col
        const location = getLocation(pokedexMap.get(pokemon.value));
        // if no name passed - in case of deselect pokemon
        if(!Object.keys(location).length) return;
        // set box, row, col in store
        pokemonLocationStore.box = location.box;
        pokemonLocationStore.row = location.row;
        pokemonLocationStore.col = location.col;
    });


    return {
        selectedGame,
        pokemon,
        games
    }
});