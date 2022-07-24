import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { styleReset, List, ListItem, Divider } from 'react95';
// pick a theme of your choice
import desktopBackground from 'react95/dist/themes/original';
// original Windows95 font (optionally)
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';
import { Default } from './Components/Header';
import { StartBar } from './Components/StartBar';
import { LoadingBlockBar } from './Components/LoadingIndicator';

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
    background-color: #008080;
  }
`;

const App = () => (
  <body>
    <GlobalStyles />
    <ThemeProvider theme={desktopBackground}>
    <div id = "poggers">
    <Default/>
    </div>
    <div id = "loadingBarId">
    <LoadingBlockBar/>
    </div>
    <div id="startBarId">
    <StartBar/>
    </div>
 
    </ThemeProvider>
  </body>
  
);

export default App;