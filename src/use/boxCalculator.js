export function useBoxCalculator() {
    // constants
    const boxSize = 30;
    const numOfCols = 6;

    const calculateBox = (pokemonNum) => {
        // catch multiple of 30 edge case
        if(pokemonNum % boxSize === 0) {
            return pokemonNum / boxSize;
        }
    
        const modBoxSize = Math.floor(pokemonNum / boxSize);
        return modBoxSize + 1;
    }
    
    const calculateRow = (pokemonNum) => {
        // mod pokemon number
        const modNum = pokemonNum % boxSize;
        // edge case for multiple of 6
        if(modNum % numOfCols === 0) return modNum / numOfCols;
        return Math.floor(modNum / numOfCols) + 1;
    }
    
    const calculateCol = (pokemonNum) => {
        let col = Math.floor(pokemonNum % numOfCols);
        // edge case for 6th column
        if(col === 0) col = 6;
        return col;
    }
    
    const checkEdgeCase = (pokemonNum) => {
        // boxes are 30 spots each - 1 should be spot 1, 31 should be spot 1, etc
        const modBoxLocation = pokemonNum % boxSize;
    
        // #30 edge case
        if(modBoxLocation === 0) {
            return true;
        }
        return false;
    }

    const getLocation = (pokemonNum) => {
        const location = {};    // empty object
        if(!pokemonNum) return location;
        location.box = calculateBox(pokemonNum);
        // edge case - last item in box
        if(checkEdgeCase(pokemonNum)) {
            location.row = 5;
            location.col = 6;
            return location;
        }
        // normal case
        location.row = calculateRow(pokemonNum);
        location.col = calculateCol(pokemonNum);
        return location;
    }

    return {
        getLocation,
    }
}