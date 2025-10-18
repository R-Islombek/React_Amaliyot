import React from 'react'

const App = () => {
  const [count, setCount] = React.useState(0)
  return (
    <div>
            <h1>{count}</h1>
            <input type="text" onChange={(e) => setCount(e.target.value)} />
    </div>
  )
}

export default App