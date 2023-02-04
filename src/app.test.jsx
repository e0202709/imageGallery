import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'
import { BrowserRouter , MemoryRouter} from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'

beforeEach(() => {
const route = '/imageGallery'

  render(
    <MemoryRouter initialEntries={[route]}>
      <App />
    </MemoryRouter>,
  )
})

it('pages renders accordingly with default button being selected', () => {
  const loadingEl = screen.queryByText('Loading...')
  expect(loadingEl).toBeInTheDocument()
  const defaultButton = screen.getByTestId('default-button')
  expect(defaultButton).toHaveClass('active')
})

it('Default button is selected, click on descending button without searching', () => {
  const defaultButton = screen.getByTestId('default-button')
  expect(defaultButton).toHaveClass('active')
  const descButton = screen.getByTestId('desc-button')
  fireEvent.click(descButton)
  expect(descButton).toHaveClass('active')
  expect(defaultButton).not.toHaveClass('active')

  const queryEl = screen.queryByTestId('query')
  expect(queryEl.textContent).toBe("")

})

it('click on sort by ascending, do search and it should have no sorting by default', () => {
    const defaultButton = screen.getByTestId('default-button')
    expect(defaultButton).toHaveClass('active')
    const ascButton = screen.getByTestId('asc-button')
    fireEvent.click(ascButton)
    expect(ascButton).toHaveClass('active')
  
    const searchInput = screen.getByTestId('search-input')
    const searchButton = screen.getByTestId('search-button')
  
    fireEvent.change(searchInput, { target: { value: 'hello' } })
    fireEvent.click(searchButton)
    const msg = screen.queryByTestId('query')
    expect(msg.textContent).toBe('hello')
    expect(defaultButton).toHaveClass('active')
  })

it('test search page not found', () => {
  const searchInput = screen.getByTestId('search-input')
  const searchButton = screen.getByTestId('search-button')

  fireEvent.change(searchInput, 'test')
  fireEvent.click(searchButton)
  const errorMessage = screen.queryByText('Sorry, we can’t find the page you were looking for.')
  expect(errorMessage).toBeInTheDocument()
})


