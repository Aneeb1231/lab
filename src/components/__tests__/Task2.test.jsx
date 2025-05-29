import { render, screen } from '@testing-library/react'
import Task2 from '../Task2'

describe('Task2 Component', () => {
  test('displays "Hello world" text', () => {
    render(<Task2 />)
    const headingElement = screen.getByRole('heading')
    expect(headingElement).toHaveTextContent('Hello world')
  })
}) 