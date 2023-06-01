import 'vanillajs-datepicker/css/datepicker.css';
import { Datepicker } from 'vanillajs-datepicker';
import { i18n } from 'i18next';

const createWidgetForm = (containerId: string, buttonColor: string, backgroundColor: string, textColor: string, i18next: i18n) => {
  const container: HTMLElement = document.getElementById(containerId)
  const divFlex = document.createElement('div')
  divFlex.classList.add('flex')
  const divInput1 = document.createElement('div')
  divInput1.classList.add('input-container')
  const divInput2 = document.createElement('div')
  divInput2.classList.add('input-container')
  const h1 = document.createElement('h1')
  h1.textContent = i18next.t('h1')
  h1.style.color = textColor
  const p = document.createElement('p')
  p.textContent = i18next.t('p')
  p.style.color = textColor
  const form = document.createElement('form')
  form.setAttribute('id', 'form')
      
  const divInput = document.createElement('div')
  divInput.setAttribute('id', 'input-items')
  const inputDepart = document.createElement('input')
  inputDepart.setAttribute('type', 'text')
  inputDepart.setAttribute('autocomplete', 'off')
  inputDepart.setAttribute('placeholder', `${i18next.t('departBtn')}`)
  inputDepart.setAttribute('id', 'depart-date')
  const btn1 = document.createElement('button')
  btn1.setAttribute('id', 'overlayButton')
  btn1.innerHTML = '<svg width="15px" height="17px" viewBox="0 0 15 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="TP-test-form" transform="translate(-505.000000, -287.000000)" fill="#4990E2"><g id="Wide-form" transform="translate(50.000000, 200.000000)"><g id="Input2" transform="translate(260.000000, 75.000000)"><path d="M197,19.9977418 C197,19.9977418 197.001596,27.2488688 197,27 L208.002502,26.9989014 C208.000907,26.9989014 207.997314,19.9994507 207.997314,19.9994507 L197,19.9977418 L197,19.9977418 L197,19.9977418 Z M203,23 L207,23 L207,26 L203,26 L203,23 L203,23 L203,23 Z M210,18 L210,27 C210,28.105 209.105,29 208,29 L197,29 C195.895,29 195,28.105 195,27 L195,18 L210,18 L210,18 L210,18 Z M207,13.9994999 L207,13.0002501 C207,12.448112 206.552,12 206,12 L205,12 C204.448,12 204,12.448112 204,13.0002501 L204,13.9994999 L201,13.9994999 L201,13.0002501 C201,12.448112 200.552,12 200,12 L199,12 C198.448,12 198,12.448112 198,13.0002501 L198,13.9994999 L197,13.9994999 C195.895,13.9994999 195,14.8947237 195,16 L210,16 C210,14.8947237 209.105,13.9994999 208,13.9994999 L207,13.9994999 L207,13.9994999 L207,13.9994999 Z" id="Calendar"></path></g></g></g></g></svg>'
  divInput1.append(inputDepart, btn1)
  divInput.append(divInput1)
  
  const inputReturn = document.createElement('input')
  inputReturn.setAttribute('type', 'text')
  inputReturn.setAttribute('autocomplete', 'off')
  inputReturn.setAttribute('placeholder', `${i18next.t('returnBtn')}`)
  inputReturn.setAttribute('id', 'return-date')
  const btn2 = document.createElement('button')
  btn2.setAttribute('id', 'overlayButton2')
  btn2.innerHTML = '<svg width="15px" height="17px" viewBox="0 0 15 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="TP-test-form" transform="translate(-505.000000, -287.000000)" fill="#4990E2"><g id="Wide-form" transform="translate(50.000000, 200.000000)"><g id="Input2" transform="translate(260.000000, 75.000000)"><path d="M197,19.9977418 C197,19.9977418 197.001596,27.2488688 197,27 L208.002502,26.9989014 C208.000907,26.9989014 207.997314,19.9994507 207.997314,19.9994507 L197,19.9977418 L197,19.9977418 L197,19.9977418 Z M203,23 L207,23 L207,26 L203,26 L203,23 L203,23 L203,23 Z M210,18 L210,27 C210,28.105 209.105,29 208,29 L197,29 C195.895,29 195,28.105 195,27 L195,18 L210,18 L210,18 L210,18 Z M207,13.9994999 L207,13.0002501 C207,12.448112 206.552,12 206,12 L205,12 C204.448,12 204,12.448112 204,13.0002501 L204,13.9994999 L201,13.9994999 L201,13.0002501 C201,12.448112 200.552,12 200,12 L199,12 C198.448,12 198,12.448112 198,13.0002501 L198,13.9994999 L197,13.9994999 C195.895,13.9994999 195,14.8947237 195,16 L210,16 C210,14.8947237 209.105,13.9994999 208,13.9994999 L207,13.9994999 L207,13.9994999 L207,13.9994999 Z" id="Calendar"></path></g></g></g></g></svg>'
  divInput2.append(inputReturn, btn2)
  divInput.append(divInput2)
  
  const button = document.createElement('button')
  button.setAttribute('type', 'submit')
  button.style.backgroundColor = buttonColor
  button.textContent = i18next.t('btn')
  button.style.color = textColor
  button.setAttribute('id', 'btn')
  form.append(divInput, button)
  
  divFlex.append(p, form)
  
  container.innerHTML = '';
  container.append(h1, divFlex)
  container.style.backgroundColor = backgroundColor
    
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Submitted value:', inputDepart.value)
    console.log('Submitted value:', inputReturn.value)
    form.reset()
  });
  
  divInput.querySelectorAll('button').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault()
      const currentInputContainer = btn.closest('.input-container')
      const currentInput = currentInputContainer.querySelector('input')
      const calendar = document.querySelector('.datepicker')
      if (calendar) calendar.remove()
  
      const datepicker = new Datepicker(currentInput, {
        language: i18next.language,
        autohide: true,
        showOnClick: false,
        showOnFocus: false,
        format: 'dd.mm.yyyy',
      })
      
      datepicker.show()
    })
  }) 
}

export default createWidgetForm