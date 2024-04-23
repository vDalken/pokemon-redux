import { createSlice } from "@reduxjs/toolkit";
import { Pokemon } from "../../Pokemon";

export const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState: {
        pokemons: [] as Array<Pokemon>,
        selectedPokemon: {} as Pokemon
    },
    reducers: {
        addPokemon: (state,action)=>{
            state.pokemons.push(action.payload)
        },
        setSelectedPokemon: (state,action)=>{
            state.selectedPokemon = action.payload
        }
    }
})

export const {addPokemon, setSelectedPokemon} = pokemonsSlice.actions

export default pokemonsSlice.reducer