import React from 'react'
import { ThemeProvider } from 'styled-components'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Typing from '../Components/Typing'
import { useTheme } from '../Context/ThemeContext'
import { GlobalStyle } from '../Styles/global'

const HomePage = () => {
    const{theme}=useTheme();
    return (
        <ThemeProvider theme={theme}>
            <div className='container'>
                <GlobalStyle />
                <Header />
                <Typing />
                <Footer />
            </div>
        </ThemeProvider>
    )
}

export default HomePage