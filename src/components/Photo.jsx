import React, { Text } from 'react'

/**
 * Photo component will mount when rendered to the DOM.
 * @namespace Photo
 * @return {string} JSX element
 */

/**
 * @typedef {object} Props
 * @prop {string} src
 */
const Photo = (props) => (
  <>
    <div>
      <li>
        <img src={props.url} alt='' />
        <br />
      </li>
      <p>Date: {props.publishedDate}</p>
    </div>
  </>
)

export default Photo
