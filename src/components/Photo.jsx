import React from 'react'

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
