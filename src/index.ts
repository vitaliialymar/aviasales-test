import './style.css';
import 'vanillajs-datepicker/css/datepicker.css';
import { Datepicker } from 'vanillajs-datepicker';
import ru from 'vanillajs-datepicker/locales/ru';
import i18next from 'i18next';
import resources from './locales/index';
import createWidgetForm from './formWidget';

Object.assign(Datepicker.locales, ru);

const app = () => {
  i18next.init({
    lng: 'en',
    debug: false,
    resources,
  }).then(() => {
    const lng = document.getElementById('lng')
    lng.textContent = i18next.t('lng')
    lng.addEventListener('click', () => {
      i18next.language === 'en' ? i18next.changeLanguage("ru").then(() => createWidgetForm('form-widget', '#F5A623', '#4A90E2', '#FFFFFF', i18next)) :
      i18next.changeLanguage("en").then(() => createWidgetForm('form-widget', '#F5A623', '#4A90E2', '#FFFFFF', i18next))
      })
  })

  createWidgetForm('form-widget', '#F5A623', '#4A90E2', '#FFFFFF', i18next)
}

app()
