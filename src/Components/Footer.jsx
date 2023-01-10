import React from 'react'
import Select from 'react-select'
import {themeOptions} from '../Styles/theme'
import {useTheme} from '../Context/ThemeContext'

const Footer = () => {
    const {setTheme}=useTheme();
    const handleThemeChange=(e)=>
    {
        console.log(e);
        setTheme(e.value)
    }
  return (
    <div className="footer">
        <div className="footerLink">
            link
        </div>
        <div className="footerTheme">
          <Select
          options={themeOptions}
          menuPlacement="top"
          onChange={handleThemeChange}
          />
        </div>
    </div>
  )
}

export default Footer