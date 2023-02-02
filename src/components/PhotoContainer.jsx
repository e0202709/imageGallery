import React, { useState, useEffect, useCallback, useMemo } from 'react'
import Photo from './Photo'
import NotFound from './NotFound'
import apiKey from './Config'
import axios from 'axios'
import Nav from './Nav'
import { sortAsc, sortDesc } from './Sorting'

const PhotoContainer = (props) => {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)
  const [asc, setAsc] = useState(false)
  const [desc, setDesc] = useState(false)
  const [init, setInit] = useState(true)
  let query = props.match.params.query === 'imageGallery' ? 'travel' : props.match.params.query

  let allImages = null

  const fetchData = useCallback(() => {
    axios
      .get(`https://api.unsplash.com/search/collections?per_page=24&page=1&query=${query}&client_id=${apiKey}`)
      .then((response) => {
        setImages(response.data.results)
        setLoading(false)
      })
      .catch((error) => {
        console.log('Error fetching and parsing data', error)
      })
  }, [query])

  const sortByAscending = useMemo(() => {
    return sortAsc(images)
  }, [images])

  const sortByDescending = useMemo(() => {
    return sortDesc(images)
  }, [images])

  let data = images
  if (data.length > 0) {
    allImages = data.map((image) => (
      <Photo url={image.cover_photo.urls.small} key={image.id} publishedDate={new Date(image.published_at).toString().substring(0, 16)} />
    ))
  } else if (!loading) {
    allImages = <NotFound />
  }

  useEffect(() => {
    setImages([])
    setLoading(true)
    fetchData()
    setInit(true)
    setAsc(false)
    setDesc(false)
  }, [fetchData, props.match.params.query])

  const sortImagesAsc = () => {
    setImages(sortByAscending)
    setInit(false)
    setAsc(true)
    setDesc(false)
  }

  const sortedImagesDesc = () => {
    setImages(sortByDescending)
    setInit(false)
    setAsc(false)
    setDesc(true)
  }

  const testingDefault = () => {
    fetchData(props.match.params.query)
    setInit(true)
    setAsc(false)
    setDesc(false)
  }

  return (
    <div className='photo-container'>
      <h2>
        {props.match.params.query ? 'Results of ' : ''}
        <span data-testid='query'>{props.match.params.query}</span>
      </h2>
      {loading ? <h1>Loading...</h1> : null}
      <Nav
        handleAscSort={sortImagesAsc}
        handleDescSort={sortedImagesDesc}
        handleDefault={testingDefault}
        isDefault={init}
        isAsc={asc}
        isDesc={desc}
      />
      <ul>{allImages}</ul>
    </div>
  )
}

export default PhotoContainer
