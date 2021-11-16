import axios from "axios";

const baseURL = 'https://api.pokemontcg.io/v2/'
const instance = axios.create({
    headers: {
        'X-Api-Key': 'd800239c-ade8-4890-85a0-04e021a8e2b1',
    },
    baseURL: baseURL,
});

export const authApi = {
    getOneTimePassword: () => {
        let password = "";
        let symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (let i = 0; i < 15; i++)
            password += symbols.charAt(Math.floor(Math.random() * symbols.length));

        return password;
    },
}
export const pokemonApi = {
    getPortionCards: (page, pageSize, query) => {
        return instance.get(`cards?q=types:${query.types} subtypes:"${query.subtypes}"&page=${page}&pageSize=${pageSize}`).then(res => res.data);
    },
    getTypesPokemon: () => {
        return instance.get('types').then(res => res.data);
    },
    getSubtypesPokemon: () => {
        return instance.get('subtypes').then(res => res.data);
    }
}