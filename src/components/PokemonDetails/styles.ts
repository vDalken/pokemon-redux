import styled from 'styled-components'

interface Pokemon {
  $name: string
}

export const PokemonDiv = styled.div<Pokemon>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 2px solid #000;
  border-radius: 0.4rem;
  gap: 1rem;
  padding: 4rem;

  background: ${(props) => {
    switch (props.$name) {
      case 'pikachu':
        return 'linear-gradient(to bottom right, #fdbb2d 0%, #ff0 100%)'
      case 'charizard':
        return 'linear-gradient(110deg, red 0%, #fff 100%)'
      case 'blastoise':
        return 'linear-gradient(120deg, #1cb5e0 0%, #000851 100%)'
      case 'flareon':
        return 'linear-gradient(0deg, #c71800 10%, #fcc245 100%)'
      case 'bulbasaur':
        return 'linear-gradient(20deg, #191919 0%, #100b32 33%, #5c0249 100%)'
      case 'alakazam':
        return 'linear-gradient(140deg, #ffa7f9 0%, #ff2cc3 39%, #ffe3a7 100%)'
      default:
        return 'linear-gradient(to bottom right, #fdbb2d 0%, #ff0 100%)'
    }
  }};
`

export const PokemonImageContainer = styled.div`
  width: 12rem;
  height: 12rem;
  display: flex;
  justify-content: center;
  img {
    width: 100%;
  }
`

export const Pokemon = styled.div`
  width: 24rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 2px solid #000;
  border-radius: 0.4rem;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.65);

  > h2 {
    text-align: center;
  }
`

export const PokemonValues = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 1.4rem;
`

export const PokemonStats = styled.div`
  text-align: right;
`

export const PokemonStatsValue = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  > span {
    font-weight: bold;
  }
`

export const PokemonAbilities = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  > p {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    > span {
      font-weight: bold;
    }
  }
`
