import React from "react"
import "./App.css"
import Button from "shared/lib/components/button"
import useDidUpdate from "shared/lib/hooks/use-did-update"
function App() {
  const [count, setCount] = React.useState(0)
  useDidUpdate(count, (prevCount) => console.log({ count, prevCount }))
  return (
    <div className="App">
      <Button onClick={() => setCount(count + 1)}>Click me?</Button>
    </div>
  )
}

export default App
