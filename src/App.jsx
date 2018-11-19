import React, { useState, useEffect } from 'react'

// import Vis from './Vis'
import VisWithHooks from './VisWithHooks'

const App = () => {
  const [isVisible, setVisible] = useState(false)

  useEffect(
    () => {
      const timer = setInterval(() => {
        setVisible(!isVisible)
      }, 1000)
      return () => {
        clearInterval(timer)
      }
    },
    [isVisible],
  )

  return <div className="app">{isVisible && <VisWithHooks />}</div>
}

export default App
