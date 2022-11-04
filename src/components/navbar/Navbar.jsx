import React from 'react'
import { useTranslation } from 'react-i18next'
import "./navbar.css"

const Navbar = () => {
    const {
        t, 
        i18n: {language, changeLanguage},
    } = useTranslation()

    const handleChangeLanguage = (e) => {
        e.preventDefault();
        changeLanguage(e.target.value)
    }
  return (
    <nav className='container'>
        <a href="#">Logo
            <img src="" alt="" />
        </a>
        <select className='select-lang'
        onChange={handleChangeLanguage}
        >{["en", "tr"].map((lang) => (
            <option key={lang} value={lang}>
                {lang.toUpperCase}
            </option>
        ))}
 
        </select>
    </nav>
  )
}

export default Navbar