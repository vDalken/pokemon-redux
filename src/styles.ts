import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html,
body {
    width: 100%;
    height: 100%;
}

#root{
    width: 100%;
    height: 100%;
}
`

export const AppDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: monospace;

  > section {
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1.4rem;
  }
`

export const Header = styled.div`
  width: 100%;
  text-align: center;
  > select {
    cursor: pointer;
    width: 10rem;
    border-radius: 0;
    padding: 0.2rem;
  }
`
