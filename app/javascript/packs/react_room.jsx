import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

document.addEventListener('turbolinks:load', () => {
  ReactDOM.render(
    <App />,
    document.getElementById('react-render-target')
  )
})
