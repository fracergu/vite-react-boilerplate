import { render, screen } from '@testing-library/react'
import App from 'src/App'

describe('App', () => {
  it('should render elements', () => {
    render(<App />)
    const title = screen.getByText(/React Typescript Boilerplate/i)
    const list = screen.getByRole('list')
    expect(title).toBeInTheDocument()
    expect(list).toBeInTheDocument()
  })
})
