////// Client Data Entry Requirements //////


       /////////// ALL REQUIRED FIELDS ///////////

// REALM: minlength 3 units long (int and str)
  // Realm must be 3 units long, may contain combination of numbers and letters

// RUM AND RUM TOKEN: maxlength 20 units long (int and str) //
  // 20 characters maxiumum. Please try again

// ENV NAME:  maxlength 30  (int and str) //
  // 30 characters maxiumum. Please try again

const realm = document.getElementById('realm')
const token = document.getElementById('token')
const RUM = document.getElementById('RUM')
const envName = document.getElementById('envName')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let errors = []
  if (realm.value.length >= 3) {
    errors.push('REALM must be 3 characters in length. Please try again.')
  }

  if (token.value.length >= 20) {
    errors.push('Token cannot exceed 20 characters. Please try again.')
  }

  if (RUM.value.length >= 20) {
    errors.push('RUM Token cannot exceed 20 characters. Please try again.')
  }

  if (envName.value.length >= 30) {
    errors.push('Environment Name cannot exceed 30 characters. Please try again.')
  }

  if (errors.length > 0){
  e.preventDefault()
  errorElement.innerText = errors.join(', ')
  }
})
