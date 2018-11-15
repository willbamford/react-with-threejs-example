import React from 'react'

import Vis from './Vis'

// const waitFor = time =>
//   new Promise(resolve => {
//     setTimeout(() => {
//       resolve(`Finished wait (${time}ms)`)
//     }, time)
//   })

// const wait = async () => {
//   const result = await waitFor(1000)
//   alert(result)
// }

const App = () => (
  <div className="app">
    <Vis />
  </div>
)

export default App
