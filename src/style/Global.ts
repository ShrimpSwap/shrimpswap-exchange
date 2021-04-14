import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { ShrimpTheme } from '@shrimpswap/uikit/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends ShrimpTheme { }
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Kanit', sans-serif;
  }
  body {
    background-color: #F7FCFF;
    background-image: url(./images/waves-bottom-bg.svg);
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: contain;

    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
