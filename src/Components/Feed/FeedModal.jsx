import React from 'react'
import styles from './FeedModal.module.css'
import useFetch from '../../Hooks/useFetch'
import { PHOTO_GET } from '../../api'
import Loading from '../Helper/Loading'
import Error from '../Helper/Error'
import PhotoContent from '../Photo/PhotoContent'

const FeedModal = ({photo, setModalPhoto}) => {

  function handleOutsideClick(event) {
    if(event.target === event.currentTarget) {
      setModalPhoto(null);
    }
  }

  const {data, error, loading, request} = useFetch();

  React.useEffect(() => {
    const fetchPhoto = async () => {
      const {url, options} = PHOTO_GET(photo.id);
      const {response, json} = await request(url, options);
    }
    fetchPhoto();
  }, [photo, request]);
  console.log(data);

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  )
}

export default FeedModal
