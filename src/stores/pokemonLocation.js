import { defineStore } from 'pinia';
import { ref } from 'vue';

export const usePokemonLocationStore = defineStore('location', () => {
    const box = ref();
    const row = ref();
    const col = ref();


    return {
        box,
        row, 
        col
    }   
});