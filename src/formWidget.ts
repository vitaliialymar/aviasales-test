import 'vanillajs-datepicker/css/datepicker.css'
import { Datepicker } from 'vanillajs-datepicker'
import { i18n } from 'i18next'

class FormWidget {
  private container: HTMLElement
  private buttonColor: string
  private backgroundColor: string
  private textColor: string
  private i18n: i18n

  constructor(containerId: string, buttonColor: string, backgroundColor: string, textColor: string, i18n: i18n) {
      this.container = document.getElementById(containerId)
      this.textColor = textColor
      this.buttonColor = buttonColor
      this.backgroundColor = backgroundColor
      this.i18n = i18n
  }

  public render(): void {
    const divFlex = document.createElement('div')
    divFlex.classList.add('flex')
    const divInput1 = document.createElement('div')
    divInput1.classList.add('input-container')
    const divInput2 = document.createElement('div')
    divInput2.classList.add('input-container')
    const h1 = document.createElement('h1')
    h1.textContent = this.i18n.t('h1')
    h1.style.color = this.textColor
    const p = document.createElement('p')
    p.textContent = this.i18n.t('p')
    p.style.color = this.textColor
    const form = document.createElement('form')
    form.setAttribute('id', 'form')
    form.addEventListener('submit', this.handleSubmit.bind(this))
        
    const divInput = document.createElement('div')
    divInput.setAttribute('id', 'input-items')
    const inputDepart = document.createElement('input')
    inputDepart.setAttribute('type', 'text')
    inputDepart.setAttribute('autocomplete', 'off')
    inputDepart.setAttribute('placeholder', `${this.i18n.t('departBtn')}`)
    inputDepart.setAttribute('id', 'depart-date')
    const btn1 = document.createElement('button')
    btn1.setAttribute('id', 'overlayButton')
    btn1.innerHTML = '<svg width="15px" height="17px" viewBox="0 0 15 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="TP-test-form" transform="translate(-505.000000, -287.000000)" fill="#4990E2"><g id="Wide-form" transform="translate(50.000000, 200.000000)"><g id="Input2" transform="translate(260.000000, 75.000000)"><path d="M197,19.9977418 C197,19.9977418 197.001596,27.2488688 197,27 L208.002502,26.9989014 C208.000907,26.9989014 207.997314,19.9994507 207.997314,19.9994507 L197,19.9977418 L197,19.9977418 L197,19.9977418 Z M203,23 L207,23 L207,26 L203,26 L203,23 L203,23 L203,23 Z M210,18 L210,27 C210,28.105 209.105,29 208,29 L197,29 C195.895,29 195,28.105 195,27 L195,18 L210,18 L210,18 L210,18 Z M207,13.9994999 L207,13.0002501 C207,12.448112 206.552,12 206,12 L205,12 C204.448,12 204,12.448112 204,13.0002501 L204,13.9994999 L201,13.9994999 L201,13.0002501 C201,12.448112 200.552,12 200,12 L199,12 C198.448,12 198,12.448112 198,13.0002501 L198,13.9994999 L197,13.9994999 C195.895,13.9994999 195,14.8947237 195,16 L210,16 C210,14.8947237 209.105,13.9994999 208,13.9994999 L207,13.9994999 L207,13.9994999 L207,13.9994999 Z" id="Calendar"></path></g></g></g></g></svg>'
    btn1.addEventListener('click', this.openDataPicker.bind(this))
    divInput1.append(inputDepart, btn1)
    divInput.append(divInput1)
    
    const inputReturn = document.createElement('input')
    inputReturn.setAttribute('type', 'text')
    inputReturn.setAttribute('autocomplete', 'off')
    inputReturn.setAttribute('placeholder', `${this.i18n.t('returnBtn')}`)
    inputReturn.setAttribute('id', 'return-date')
    const btn2 = document.createElement('button')
    btn2.setAttribute('id', 'overlayButton2')
    btn2.innerHTML = '<svg width="15px" height="17px" viewBox="0 0 15 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="TP-test-form" transform="translate(-505.000000, -287.000000)" fill="#4990E2"><g id="Wide-form" transform="translate(50.000000, 200.000000)"><g id="Input2" transform="translate(260.000000, 75.000000)"><path d="M197,19.9977418 C197,19.9977418 197.001596,27.2488688 197,27 L208.002502,26.9989014 C208.000907,26.9989014 207.997314,19.9994507 207.997314,19.9994507 L197,19.9977418 L197,19.9977418 L197,19.9977418 Z M203,23 L207,23 L207,26 L203,26 L203,23 L203,23 L203,23 Z M210,18 L210,27 C210,28.105 209.105,29 208,29 L197,29 C195.895,29 195,28.105 195,27 L195,18 L210,18 L210,18 L210,18 Z M207,13.9994999 L207,13.0002501 C207,12.448112 206.552,12 206,12 L205,12 C204.448,12 204,12.448112 204,13.0002501 L204,13.9994999 L201,13.9994999 L201,13.0002501 C201,12.448112 200.552,12 200,12 L199,12 C198.448,12 198,12.448112 198,13.0002501 L198,13.9994999 L197,13.9994999 C195.895,13.9994999 195,14.8947237 195,16 L210,16 C210,14.8947237 209.105,13.9994999 208,13.9994999 L207,13.9994999 L207,13.9994999 L207,13.9994999 Z" id="Calendar"></path></g></g></g></g></svg>'
    btn2.addEventListener('click', this.openDataPicker.bind(this))
    divInput2.append(inputReturn, btn2)
    divInput.append(divInput2)
    
    const button = document.createElement('button')
    button.setAttribute('type', 'submit')
    button.style.backgroundColor = this.buttonColor
    button.textContent = this.i18n.t('btn')
    button.style.color = this.textColor
    button.setAttribute('id', 'btn')
    form.append(divInput, button)
    
    divFlex.append(p, form)
    
    this.container.innerHTML = '';
    this.container.append(h1, divFlex)
    this.container.style.backgroundColor = this.backgroundColor
  }

  private handleSubmit(e: Event): void {
    e.preventDefault()
    const inputDepart = document.querySelector('#depart-date') as HTMLInputElement
    const inputReturn = document.querySelector('#return-date') as HTMLInputElement
    const form = document.getElementById('form') as HTMLFormElement
    console.log('Submitted value:', inputDepart.value)
    console.log('Submitted value:', inputReturn.value)
    form.reset()
  }

  private createDatepicker(el: HTMLInputElement) { 
    return new Datepicker(el, {
    language: this.i18n.language,
    autohide: true,
    showOnClick: false,
    showOnFocus: false,
    format: 'dd.mm.yyyy',
    })
  }

  private openDataPicker(e: Event): void {
    e.preventDefault()
    const currentInputContainer = (e.target as HTMLElement).closest('.input-container')
    const currentInput = currentInputContainer.querySelector('input')
    const calendar = document.querySelector('.datepicker')
    if (calendar) calendar.remove()
    
    const datepicker = this.createDatepicker(currentInput)
    datepicker.show()
  }
}

export default FormWidget