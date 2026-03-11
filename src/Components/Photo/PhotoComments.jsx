import React from 'react'
import styles from './PhotoContent.module.css'
import { UserContext } from '../../UserContext';
import PhotoCommentsForm from './PhotoCommentsForm';
const PhotoComments = ({id, comments}) => {
  const {login} = React.useContext(UserContext);
  return (
    <div className={styles.comments}>
        {login && <PhotoCommentsForm id={id} />}
    </div>  
  )
}

export default PhotoComments