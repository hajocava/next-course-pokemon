const toogleFavorite = (id: number) => {
    let favorities: number[] = JSON.parse(localStorage.getItem('favorities') || '[]');

    if (favorities.includes(id)) {
        favorities = favorities.filter((pokeId) => pokeId !== id);
    } else {
        favorities.push(id);
    }

    localStorage.setItem('favorities', JSON.stringify(favorities));
};

const existInFavorites = (id: number): boolean => {
    if ( typeof window === 'undefined' ) return false;
    
    const favorities: number[] = JSON.parse(localStorage.getItem('favorities') || '[]');
    
    return favorities.includes(id);
}

const pokemons = () =>{
    return JSON.parse(localStorage.getItem('favorities') || '[]');
}

export default {
    toogleFavorite,
    existInFavorites,
    pokemons
}
