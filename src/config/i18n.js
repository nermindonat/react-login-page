import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "../locale/en/translationEN.json";
import tr from "../locale/tr/translationTR.json"

const resources = {
    en: {
        translation: en,
    },
    tr: {
        translation: tr
    }
}

i18n.use(initReactI18next).init({
    resources,
    fallbackLng: "en",
    detection: {
        order: ["cookie", "localStorage", "navigator", "htmlTag"],
        caches: ["cookie"],
      },
      preload: ["en", "tr"],
})

export default i18n;