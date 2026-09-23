import { calcularPeso, formatearFecha } from './utils.js'
import './style.css'
import.meta.env.VITE_VERSION

import confetti from 'canvas-confetti'

const boton = document.getElementById('añadir')
const input = document.getElementById('texto')
const inputMin = document.getElementById('min')
const lista = document.getElementById('lista')

boton.addEventListener('click', (e) => guardarPlan(e))

function guardarPlan(e) {
  e.preventDefault()
  const pi = 3.14
  const minutos = inputMin.value
  if (!minutos) return
  if (!input.value) return
  let peso = calcularPeso(minutos)
  const fechaHoy = formatearFecha(new Date())
  const li = document.createElement('li')

  li.textContent = input.value + ' - ' + fechaHoy + ' ' + minutos + ' ' + peso
  lista.appendChild(li)
  input.value = ''
  confetti()
}
