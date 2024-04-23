import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import { Pokemon, PokemonAbilities, PokemonDiv, PokemonImageContainer, PokemonStats, PokemonStatsValue, PokemonValues } from './styles'

export const PokemonDetails = () => {
  const {
    name,
    hp,
    attack,
    defense,
    specialAttack,
    specialDefense,
    speed,
    height,
    weight,
    ability,
    hiddenAbility,
    img
  } = useSelector((state: RootState) => state.pokemons.selectedPokemon)

  return (
    <PokemonDiv $name={name.toLowerCase()}>
      <PokemonImageContainer>
        <img src={img} alt="pokemon-img" />
      </PokemonImageContainer>
      <Pokemon>
        <h2>{name}</h2>
        <PokemonValues>
          <PokemonStats>
            <p>HP: </p>
            <p>ATTACK: </p>
            <p>DEFENSE: </p>
            <p>SPECIAL ATTACK: </p>
            <p>SPECIAL DEFENSE: </p>
            <p>SPEED: </p>
            <p>HEIGHT: </p>
            <p>WEIGHT: </p>
          </PokemonStats>
          <PokemonStatsValue>
            <span>{hp}</span>
            <span>{attack}</span>
            <span>{defense}</span>
            <span>{specialAttack}</span>
            <span>{specialDefense}</span>
            <span>{speed}</span>
            <span>{height}</span>
            <span>{weight}</span>
          </PokemonStatsValue>
        </PokemonValues>
        <PokemonAbilities>
          <p>
            ABILITY: <span>{ability}</span>
          </p>
          <p>
            HIDDEN ABILITY: <span>{hiddenAbility}</span>
          </p>
        </PokemonAbilities>
      </Pokemon>
    </PokemonDiv>
  )
}
