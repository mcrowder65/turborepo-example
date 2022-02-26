import React from "react"
import { render, screen } from "@testing-library/react"
import App from "src/App"
console.log("app")
test("renders app one", () => {
  render(<App />)
  expect(screen.getByText(/click me/i)).toBeInTheDocument()
})
