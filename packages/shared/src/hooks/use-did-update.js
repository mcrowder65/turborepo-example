import React from "react"
import usePrevious from "./use-previous"
import useCallbackRef from "./use-callback-ref"

const useDidUpdate = (value, onUpdate) => {
  const prev = usePrevious(value)
  const onUpdateRef = useCallbackRef(onUpdate)
  React.useEffect(() => {
    if (prev !== value) {
      onUpdateRef.current(prev)
    }
  }, [prev, value])
}

export default useDidUpdate
