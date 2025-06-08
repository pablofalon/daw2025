var fullName = document.getElementById('fullName')
var email = document.getElementById('email')
var password = document.getElementById('password')
var age = document.getElementById('age')
var phone = document.getElementById('phone')
var address = document.getElementById('address')
var city = document.getElementById('city')
var postalCode = document.getElementById('postalCode')
var dni = document.getElementById('dni')
var form = document.getElementById('form')

const fullNewUser = {
    fullname: '',
    email: '',
    password: '',
    age: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    dni: ''
}

const errorMessages = {
    fullNameError: '',
    emailError: '',
    passwordError: '',
    ageError: '',
    phoneError: '',
    addressError: '',
    cityError: '',
    postalCodeError: '',
    dniError: ''
}

function addFocusClearError(inputId, errorId) {
    document.getElementById(inputId).addEventListener('focus', function () {
        document.getElementById(errorId).textContent = ''
    })
}

fullName.addEventListener('blur', function (e) {
    var value = e.target.value
    var errorMessage = document.getElementById('fullNameError')

    if (value === '') {
        errorMessage.textContent = ''
        return
    }

    if (value.length > 6 && value.includes(' ')) {
        errorMessage.textContent = ''
        fullNewUser.fullname = value
        errorMessages.fullNameError = ''
        return
    }
    errorMessage.textContent = 'Debe tener más de 6 letras y al menos un espacio entre medio.'
    errorMessages.fullNameError = errorMessage.textContent
})

fullName.addEventListener('input', function (e) {
    var saludo = document.getElementById('saludo')
    saludo.textContent = 'Hola ' + e.target.value
})

email.addEventListener('blur', function (e) {
    var value = e.target.value
    var errorMessage = document.getElementById('emailError')
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (value === '') {
        errorMessage.textContent = ''
        return
    }

    if (emailRegex.test(value)) {
        errorMessage.textContent = ''
        fullNewUser.email = value
        errorMessages.emailError = ''
        return
    }
    errorMessage.textContent = 'Debe tener un formato de email válido.'
    errorMessages.emailError = errorMessage.textContent
})

password.addEventListener('blur', function (e) {
    var value = e.target.value
    var errorMessage = document.getElementById('passwordError')
    var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

    if (value === '') {
        errorMessage.textContent = ''
        return
    }

    if (passwordRegex.test(value)) {
        fullNewUser.password = value
        errorMessage.textContent = ''
        errorMessages.passwordError = ''
        return
    }
    errorMessage.textContent = 'Al menos 8 caracteres, formados por letras y números.'
    errorMessages.passwordError = errorMessage.textContent
})

age.addEventListener('blur', function (e) {
    var value = e.target.value
    var errorMessage = document.getElementById('ageError')

    if (value === '') {
        errorMessage.textContent = ''
        return
    }

    if (value >= 18) {
        fullNewUser.age = value
        errorMessage.textContent = ''
        errorMessages.ageError = ''
        return
    }
    errorMessage.textContent = 'Número entero mayor o igual a 18.'
    errorMessages.ageError = errorMessage.textContent
})

phone.addEventListener('blur', function (e) {
    var value = e.target.value
    var errorMessage = document.getElementById('phoneError')
    var regex = /^\d{7,}$/

    if (value === '') {
        errorMessage.textContent = ''
        return
    }

    if (regex.test(value)) {
        fullNewUser.phone = value
        errorMessage.textContent = ''
        errorMessages.phoneError = ''
        return
    }
    errorMessage.textContent = 'Número de al menos 7 dígitos, no aceptar espacios, guiones ni paréntesis.'
    errorMessages.phoneError = errorMessage.textContent
})

address.addEventListener('blur', function (e) {
    var value = e.target.value
    var errorMessage = document.getElementById('addressError')
    var regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*\s).{5,}$/

    if (value === '') {
        errorMessage.textContent = ''
        return
    }

    if (regex.test(value)) {
        fullNewUser.address = value
        errorMessage.textContent = ''
        errorMessages.addressError = ''
        return
    }
    errorMessage.textContent = 'Al menos 5 caracteres, con letras, números y un espacio en el medio.'
    errorMessages.addressError = errorMessage.textContent
})

city.addEventListener('blur', function (e) {
    var value = e.target.value
    var errorMessage = document.getElementById('cityError')
    const ciudadRegex = /^.{3,}$/

    if (value === '') {
        errorMessage.textContent = ''
        return
    }

    if (ciudadRegex.test(value)) {
        fullNewUser.city = value
        errorMessage.textContent = ''
        errorMessages.cityError = ''
        return
    }
    errorMessage.textContent = 'Al menos 3 caracteres.'
    errorMessages.cityError = errorMessage.textContent
})

postalCode.addEventListener('blur', function (e) {
    var value = e.target.value
    var errorMessage = document.getElementById('postalCodeError')
    const cpRegex = /^.{3,}$/

    if (value === '') {
        errorMessage.textContent = ''
        return
    }

    if (cpRegex.test(value)) {
        fullNewUser.postalCode = value
        errorMessage.textContent = ''
        errorMessages.postalCodeError = ''
        return
    }
    errorMessage.textContent = 'Al menos 3 caracteres.'
    errorMessages.postalCodeError = errorMessage.textContent
})

dni.addEventListener('blur', function (e) {
    var value = e.target.value
    var errorMessage = document.getElementById('dniError')
    const dniRegex = /^\d{7,8}$/

    if (value === '') {
        errorMessage.textContent = ''
        return
    }

    if (dniRegex.test(value)) {
        fullNewUser.dni = value
        errorMessage.textContent = ''
        errorMessages.dniError = ''
        return
    }
    errorMessage.textContent = 'Número de 7 u 8 dígitos.'
    errorMessages.dniError = errorMessage.textContent
})

addFocusClearError('email', 'emailError')
addFocusClearError('password', 'passwordError')
addFocusClearError('age', 'ageError')
addFocusClearError('phone', 'phoneError')
addFocusClearError('address', 'addressError')
addFocusClearError('city', 'cityError')
addFocusClearError('postalCode', 'postalCodeError')
addFocusClearError('dni', 'dniError')

form.addEventListener('submit', function (e) {
    e.preventDefault()

    var errors = Object.values(errorMessages).filter(msg => msg !== '')

    if (errors.length > 0) {
        alert('Hay errores en el formulario:\n\n' + errors.join('\n'))
        return
    }

    alert('Formulario enviado con éxito:\n\n' + 
        `Nombre completo: ${fullNewUser.fullname}\n` +
        `Email: ${fullNewUser.email}\n` +
        `Contraseña: ${fullNewUser.password}\n` +
        `Edad: ${fullNewUser.age}\n` +
        `Teléfono: ${fullNewUser.phone}\n` +
        `Dirección: ${fullNewUser.address}\n` +
        `Ciudad: ${fullNewUser.city}\n` +
        `Código Postal: ${fullNewUser.postalCode}\n` +
        `DNI: ${fullNewUser.dni}`
    )
})
