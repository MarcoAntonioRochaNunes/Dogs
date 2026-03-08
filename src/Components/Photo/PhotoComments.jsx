import React from 'react'
import styles from './PhotoContent.module.css'
import { UserContext } from '../../UserContext';

const PhotoComments = ({id, comments}) => {
  const {login} = React.useContext(UserContext);
  return (
    <div className={styles.comments}>
      testesss
    </div>
  )
}

export default PhotoComments