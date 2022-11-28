<script setup>
// imports
import { useInputsStore } from '../stores/inputs.js';
import { usePokemonLocationStore } from '../stores/pokemonLocation.js';

// use imports
const inputsStore = useInputsStore();
const pokemonLocationStore = usePokemonLocationStore();

</script>

<template>
    <div id="location-wrapper" :class="{ invisible: !inputsStore.pokemon }">
        <h3>{{ inputsStore.pokemon }} belongs in <span class="bold">Box {{ pokemonLocationStore.box }} - Row {{ pokemonLocationStore.row }}, Col {{ pokemonLocationStore.col }}</span></h3>
    </div>
</template>

<style scoped>
.invisible {
    visibility: hidden;
}

.bold {
    font-weight: bold;
}
</style>