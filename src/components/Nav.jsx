import React from 'react'

function Nav(props) {
  const { handleAscSort, handleDescSort, handleDefault, isDefault, isAsc, isDesc } = props

  return (
    <nav className='main-nav'>
      <ul>
        <button data-testid="asc-button" className={isAsc === true ? 'active' : undefined} onClick={handleAscSort}>
          Ascending
        </button>
        <button data-testid="desc-button"className={isDesc === true ? 'active' : undefined} onClick={handleDescSort}>
          Descending
        </button>
        <button data-testid="default-button" className={isDefault === true ? 'active' : undefined} onClick={handleDefault}>
          Default
        </button>
      </ul>
    </nav>
  )
}

export default Nav
