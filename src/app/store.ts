import { combineReducers, configureStore } from "@reduxjs/toolkit";
import pokemonReducer from '../features/pokemons/pokemonsSlice'

const rootReducer = combineReducers({
    pokemons: pokemonReducer
})

export type RootState = ReturnType<typeof rootReducer>

const store = configureStore({
    reducer: rootReducer
})

export default store