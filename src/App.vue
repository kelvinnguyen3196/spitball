<script setup>
// imports
import TheTitle from './components/TheTitle.vue';
</script>

<template>
    <div id="page-content">
        <TheTitle />
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
    --color-accent: #F2E7D5;
    --color-light: #F7F7F7;

    --font-size-title: 3.6rem;
    --font-size-subtitle: 1.8rem;

    --content-width: min(90vw, 140rem);
    --content-margin: min(10vw, 5rem);
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
}

h1 {
    font-family: 'Poppins';
    font-weight: bold;
    font-size: var(--font-size-title);
    color: var(--color-light);
}

h2 {
    font-family: 'Poppins';
    font-weight: 300;
    font-size: var(--font-size-subtitle);
    color: var(--color-accent);
}
</style>

<style>
#page-content {
    margin-inline: var(--content-margin);
    max-width: var(--content-width);
    margin-block: 2rem;
}
</style>