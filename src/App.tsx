import { PokemonDetails } from './components/PokemonDetails'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemon } from './api/pokemon'
import {
  addPokemon,
  setSelectedPokemon
} from './features/pokemons/pokemonsSlice'
import { RootState } from './app/store'
import { capitalize } from 'lodash'
import { AppDiv, GlobalStyle, Header } from './styles'

function App() {
  const dispatch = useDispatch()
  const pokemons = useSelector((state: RootState) => state.pokemons.pokemons)
  const optionSelectedPokemon = useSelector(
    (state: RootState) => state.pokemons.selectedPokemon.name
  )

  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedPokemonName = event.target.value
    const selectedPokemon = pokemons.find(
      (element) => element.name === capitalize(selectedPokemonName)
    )
    if (!selectedPokemon) {
      getPokemon(selectedPokemonName).then((resp) => {
        const data = resp.data
        const newPokemon = {
          name: capitalize(data.name),
          hp: data.stats[0].base_stat,
          attack: data.stats[1].base_stat,
          defense: data.stats[2].base_stat,
          specialAttack: data.stats[3].base_stat,
          specialDefense: data.stats[4].base_stat,
          speed: `${data.stats[5].base_stat} m/s`,
          height: `${data.height} feet`,
          weight: `${data.weight} pounds`,
          ability: capitalize(data.abilities[0].ability.name),
          hiddenAbility: capitalize(data.abilities[1].ability.name),
          img: data.sprites.other.dream_world.front_default
        }

        dispatch(addPokemon(newPokemon))
        dispatch(setSelectedPokemon(newPokemon))
      })
    } else {
      dispatch(setSelectedPokemon(selectedPokemon))
    }
  }

  return (
    <>
      <GlobalStyle />
      <AppDiv>
        <section>
          <Header>
            <p>pokemon list</p>
            <select name="pokemons" id="pokemons" onChange={onChange}>
              <option value="" selected disabled>choose a pokemon</option>
              <option value="pikachu">pikachu</option>
              <option value="charizard">charizard</option>
              <option value="blastoise">blastoise</option>
              <option value="flareon">flareon</option>
              <option value="bulbasaur">bulbasaur</option>
              <option value="alakazam">alakazam</option>
            </select>
          </Header>
          {optionSelectedPokemon ? (
            <PokemonDetails />
          ) : (
            <p>Waiting for your choice...</p>
          )}
        </section>
      </AppDiv>
    </>
  )
}

export default App
