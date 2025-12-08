import React from 'react'
import styles from './FeedModal.module.css'
import useFetch from '../../Hooks/useFetch'
import { PHOTO_GET } from '../../api'
import Loading from '../Helper/Loading'
import Error from '../Helper/Error'

const FeedModal = ({photo}) => {

  const {data, error, loading, request} = useFetch();

  React.useEffect(() => {
    const fetchPhoto = async () => {
      const {url, options} = PHOTO_GET(photo.id);
      const {response, json} = await request(url, options);
      console.log(response)
      console.log(json)
    }
  }, [photo, request]);

  return (
    <div>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  )
}

export default FeedModal
