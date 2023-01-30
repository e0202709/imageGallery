import React, { useState, useEffect, useCallback, useMemo } from 'react'
import Photo from './Photo'
import NotFound from './NotFound'
import apiKey from './Config'
import axios from 'axios'
import Nav from './Nav'

// componentDidUpdate(prevProps) {
//   if (this.props.location.key !== prevProps.location.key) {
//     this.resetState();
//     this.fetchData(this.props.match.params.query);
//   }
// }
const PhotoContainer = (props) => {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)
  const [asc, setAsc] = useState(false)
  const [desc, setDesc] = useState(false)
  const [init, setInit] = useState(true)

  let allImages
  // let test = props.match.params.query || 'travel'
  // console.log('TEST ', test)

  //   const logResult = useCallback(() => {
  //   return props.match.params.query;
  // }, []); //logResult is memoized now.

  const fetchData = useCallback(
    (query = 'travel') => {
      axios
        .get(`https://api.unsplash.com/search/collections?per_page=24&page=1&query=${query}&client_id=${apiKey}`)
        .then((response) => {
          setImages(response.data.results)
          setLoading(false)
          // displayImages(response.data.results, false);
        })
        .catch((error) => {
          console.log('Error fetching and parsing data', error)
        })
    },
    [props.match.params.query]
  )

  const sortByAscending = useMemo(() => {
    const test = images.map((obj) => {
      return { ...obj, published_at: new Date(obj.published_at) }
    })
    return [...test].sort((objA, objB) => new Date(objA.published_at) - new Date(objB.published_at))
  }, [images])

  const sortByDescending = useMemo(() => {
    const test = images.map((obj) => {
      return { ...obj, published_at: new Date(obj.published_at) }
    })
    return [...test].sort((objA, objB) => new Date(objB.published_at) - new Date(objA.published_at))
  }, [images])
  // const displayImages = (images) => {
  let data = images
  if (data.length > 0) {
    console.log(data)
    allImages = data.map((image) => (
      <Photo url={image.cover_photo.urls.small} key={image.id} publishedDate={new Date(image.published_at).toString().substring(0, 16)} />
    ))
    // sortImages();
  } else if (!loading) {
    allImages = <NotFound />
  }
  //  }
  // {info.substring(0, 20)} {info.length >= 20 && '...'}
  useEffect(() => {
    setImages([])
    setLoading(true)
    fetchData(props.match.params.query)
    setInit(true)
    setAsc(false)
    setDesc(false)
  }, [props.match.params.query])

  const sortImagesAsc = () => {
    setImages(sortByAscending)
    setInit(false)
    setAsc(true)
    setDesc(false)
  }

  const sortedImagesDesc = () => {
    // const sortedDesc = sortByDescending;
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
        <span>{props.match.params.query}</span>
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
