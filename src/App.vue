<script setup>
// imports
import TheTitle from './components/TheTitle.vue';
import TheInputs from './components/TheInputs.vue';
import TheLocation from './components/TheLocation.vue';
</script>

<template>
    <div id="page-content">
        <TheTitle />
        <TheInputs />
        <TheLocation />
    </div>
</template>

<style>
/* load fonts */
@font-face {
    font-family: 'Poppins';
    src: url('./assets/Poppins/Poppins-Regular.ttf') format('truetype');
    font-weight: normal;
    font-size: normal;
}

@font-face {
    font-family: 'Poppins';
    src: url('./assets/Poppins/Poppins-Bold.ttf') format('truetype');
    font-weight: bold;
    font-size: normal;
}

@font-face {
    font-family: 'Poppins';
    src: url('./assets/Poppins/Poppins-Light.ttf') format('truetype');
    font-weight: 300;
    font-size: normal;
}

:root {
    --color-dark: #393E46;
    --color-accent: #6D9886;
    --color-light: #F7F7F7;

    --font-size-title: 3.6rem;
    --font-size-subtitle: 2rem;
    --font-size-label: 1.8rem;

    --content-width: min(90vw, 140rem);
    --content-margin: min(10vw, 5rem);

    /* vueform/multiselect override */
    --ms-font-size: var(--font-size-label);
    --ms-option-font-size: var(--font-size-label);
    --ms-bg: var(--color-light);
    --ms-border-color: var(--color-light);
    --ms-dropdown-border-color: var(--color-light);
    --ms-ring-color: none;

    --ms-option-bg-pointed: var(--color-light);
    --ms-option-color-pointed: var(--color-accent);
    --ms-option-bg-selected: var(--color-accent);
    --ms-option-color-selected: var(--color-light);
    --ms-option-bg-selected-pointed: var(--color-accent);
    --ms-option-color-selected-pointed: var(--color-light);
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    /* 1rem = 10px */
    font-size: 62.5%;
}

body {
    /* resize up font size for accessiblity */
    font-size: 1.6rem;
    background: var(--color-dark);
    font-family: 'Poppins';
}

h1 {
    font-weight: bold;
    font-size: var(--font-size-title);
    color: var(--color-light);
}

h2 {
    font-weight: 300;
    font-size: var(--font-size-subtitle);
    color: var(--color-accent);
}

h3 {
    font-weight: 300;
    font-size: var(--font-size-label);
    color: var(--color-light);
}

</style>

<style>
#page-content {
    display: flex;
    flex-direction: column;
    gap: 3rem;

    margin-inline: var(--content-margin);
    max-width: var(--content-width);
    margin-block: 2rem;
}
</style>