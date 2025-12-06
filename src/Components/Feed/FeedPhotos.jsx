import React from 'react'
import styles from './FeedPhotos.module.css'
import FeedPhotosItem from './FeedPhotosItem'
import useFetch from '../../Hooks/useFetch'
import { PHOTOS_GET } from '../../api'

const FeedPhotos = () => {

  const {data, loading, error, request} = useFetch()

  React.useEffect(() => {
    const fetchPhotos = async () => {
      const {url, options} = PHOTOS_GET({page: 1, total: 6, user: 0});
      await request(url, options)
    }
    fetchPhotos()
  }, [request])

  return (
    <div>
      <FeedPhotosItem />
    </div>
  )
}

export default FeedPhotos
