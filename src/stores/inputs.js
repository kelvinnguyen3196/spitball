import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useInputsStore = defineStore('inputs', () => {
    const games = [`Scarlet/Violet`];
    // inputs
    const selectedGame = ref(`${games[0]}`);
    const pokemon = ref(``);


    return {
        selectedGame,
        pokemon,
        games
    }
});