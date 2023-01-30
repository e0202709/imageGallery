import React from 'react'

function Nav(props) {
  const { handleAscSort, handleDescSort, handleDefault, isDefault, isAsc, isDesc } = props

  return (
    <nav className='main-nav'>
      <ul>
        <button className={isAsc === true ? 'active' : undefined} onClick={handleAscSort}>
          Ascending
        </button>
        <button className={isDesc === true ? 'active' : undefined} onClick={handleDescSort}>
          Descending
        </button>
        <button className={isDefault === true ? 'active' : undefined} onClick={handleDefault}>
          Default
        </button>

        {/* <li><NavLink to="/search/travel">Travel</NavLink></li>
        <li><NavLink to="/search/food">Food</NavLink></li>
        <li><NavLink to="/search/music">Music</NavLink></li> */}
      </ul>
    </nav>
  )
}

export default Nav
