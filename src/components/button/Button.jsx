import React from 'react'
import './button.css';
import { useTranslation } from "react-i18next";


const Button = () => {
  const { t } = useTranslation();
  return (
    <div>
      <button className='submit' type='submit'>{t("sign-account")}</button>
    </div>
  )
}

export default Button
