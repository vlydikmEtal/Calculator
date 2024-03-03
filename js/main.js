const display = document.querySelector('.display')
const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
const action = ['+', '-', '/', '*']
const AC = document.querySelector('.AC')
const buttons = document.querySelector('.buttons')

let a = ''
let b = ''
let sign = ''
let result = false

const clearAll = () => {
  a = ''
  b = ''
  sign = ''
  result = false
  display.textContent = 0
}

AC.addEventListener('click', clearAll)

buttons.addEventListener('click', (e) => {
  display.textContent = 0
  const key = e.target.textContent

  if(digit.includes(key)) {
    if(b === '' && sign === '') {
      a += key
      display.textContent = a
    } else if (a !== '' && sign !== '' && result) {
      b = key
      display.textContent = b
      result = false
    } else {
      b += key
      display.textContent = b
    }
  } else if (action.includes(key)) {
    sign = key
    display.textContent = sign
    return
  }

  if(key === '+/-') {
    a = Number(a) * -1
    display.textContent = a
  }

  if(key === '%') {
    a = Number(a) / 100

    result = true
    display.textContent = a
  }
  
  if(key === '=') {
    if (b === '') b = a
    switch (sign) {
      case '+':
        a = Number(a) + Number(b)
        break
      case '-':
        a = Number(a) - Number(b)  
        break
      case '/':
        if(b === '0') {
          display.textContent = 'Ошибка'
          a = ''
          b = ''
          sign = ''
          return
        }
        a = Number(a) / Number(b)
        break
      case '*':
        a = Number(a) * Number(b)
        break
    }

    result = true
    display.textContent = a = Math.floor(parseFloat(a) * 10) / 10
    console.log(a)
  }
})

// ебать я мощный нахуй