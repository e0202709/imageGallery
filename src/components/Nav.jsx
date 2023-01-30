import React from 'react'
import { NavLink } from 'react-router-dom'

/**
 * Nav component will mount NavBar when rendered to the DOM.
 * @namespace Nav
 * @return {string} JSX element
 */

function Nav(props) {
  const { handleAscSort, handleDescSort, handleDefault, isDefault, isAsc, isDesc } = props

  // const addItemButtonPressed = () => {
  //   handleSort();
  // };
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
