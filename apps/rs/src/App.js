import React from "react"
import Button from "shared/src/components/button"
import useDidUpdate from "shared/src/hooks/use-did-update"
import logger from "shared-two/src/functions/logger"
console.log("hi")
function App() {
  const [count, setCount] = React.useState(0)
  useDidUpdate(count, (prevCount) => console.log({ count, prevCount }))
  logger("hello")
  return (
    <div className="App">
      <Button onClick={() => setCount(count + 1)}>Click me?</Button>
    </div>
  )
}

export default App
