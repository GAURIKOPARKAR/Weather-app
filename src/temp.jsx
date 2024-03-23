import React from 'react'
import App from './App'

const temp = ({seelist}) => {
  return (
    <div> <button onClick={seelist}>see list</button>
    {console.log("Rendered")}
    </div>
  )
}

export default temp