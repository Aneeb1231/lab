import { render, screen } from '@testing-library/react'
import Task3 from '../Task3'

describe('Task3 Component', () => {
  test('displays list items', () => {
    render(<Task3 />)
    
    // Check if specific items are present
    expect(screen.getByText('Apple')).toBeInTheDocument()
    expect(screen.getByText('Banana')).toBeInTheDocument()
    expect(screen.getByText('Orange')).toBeInTheDocument()
    expect(screen.getByText('Mango')).toBeInTheDocument()
    expect(screen.getByText('Grapes')).toBeInTheDocument()
    
    // Check if all list items are rendered
    const listItems = screen.getAllByRole('listitem')
    expect(listItems).toHaveLength(5)
  })
}) 