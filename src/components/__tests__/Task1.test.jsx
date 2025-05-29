import { render, screen } from '@testing-library/react'
import Task1 from '../Task1'

describe('Task1 Component', () => {
  test('renders Task1 component', () => {
    render(<Task1 />)
    const headingElement = screen.getByRole('heading')
    expect(headingElement).toBeInTheDocument()
  })
}) 