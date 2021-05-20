class FormHandler {

  constructor() {

    this.form = document.querySelector('form')
    this.input = this.form.querySelector('input')
    this.form.addEventListener('submit', this.submit)
    this.submitted = false

  }

  submit = (e) => {
    e.preventDefault()

    this.submitting = true
    this.cleanForm()
    if (!this.validateEmail()) {
      this.handleError()
    }
    this.submitting = false
    
  }

  validateEmail = () => {
    const regexp = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
    if (regexp.test(this.input.value)) {
      return true
    }

    return false
  }

  cleanForm = () => {
    this.form.querySelectorAll('.form-error').forEach((el) => {
      el.querySelector('.error-message').remove()
      el.classList.remove('form-error')
    })
  }

  handleError = () => {
    const errorNode = document.createElement('p')
    errorNode.classList.add('error-message')
    errorNode.innerText = 'Please insert a valid email'
    this.input.parentNode.classList.add('form-error')
    this.input.parentNode.appendChild(errorNode)
  }

}

export default FormHandler
