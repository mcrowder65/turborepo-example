import React from "react"
console.log("hi")
import Button from "src/components/button"
import { render, screen } from "@testing-library/react"

test("renders a button", () => {
  render(<Button>button</Button>)

  expect(screen.getByText(/button/i)).toBeInTheDocument()
})
