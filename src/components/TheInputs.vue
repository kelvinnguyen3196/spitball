<script setup>
// imports 
import Multiselect from '@vueform/multiselect';

import { useInputsStore } from '../stores/inputs.js';
import { useScarletVioletStore } from '../stores/scarletviolet.js';

// use imports
const inputsStore = useInputsStore();
const scarletViolet = useScarletVioletStore();
</script>

<template>
    <div id="input-wrapper">
        <div class="input-container">
            <h3>Game</h3>
            <Multiselect 
                v-model="inputsStore.selectedGame" 
                :options="inputsStore.games" 
                :searchable="true"
            />
        </div>
    
        <div class="input-container">
            <h3>Pokémon</h3>
            <Multiselect 
                v-model="inputsStore.pokemon" 
                :options="scarletViolet.pokedex" 
                :searchable="true"
                placeholder="Start typing..."
            />
        </div>
    </div>
</template>

<style src="@vueform/multiselect/themes/default.css"></style>
<style scoped>
#input-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 50rem;
}
.input-container {
    font-family: 'Poppins';
}
</style>