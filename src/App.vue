<script setup>
// imports
import TheTitle from './components/TheTitle.vue';
</script>

<template>
	<TheTitle />
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

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    --color-dark: #393E46;
    --color-accent: #F2E7D5;
    --color-light: #F7F7F7;

    --font-size-title: 36px;
    --font-size-subtitle: 18px;
}

html {
    /* 1rem = 1px */
    font-size: 6.25%;
}

body {
    /* resize up font size for accessiblity */
    font-size: 16rem;
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