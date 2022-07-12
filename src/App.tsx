import React from 'react';
import { ThemeProvider } from 'styled-components';
import usePersistedStats from './utils/usePersistedStats';
//THEMES
import light from './styles/themes/light';
import dark from './styles/themes/dark';
//COMPONENTS
import Header from './components/Header'
//STYLES
import GlobalStyle from './styles/global'

function App() {
  const [theme, setTheme] = usePersistedStats('theme',light);
  const ToggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
        <GlobalStyle />
        <Header toggleTheme={ToggleTheme}/>
    </div>
    </ThemeProvider>
  )
}

export default App
