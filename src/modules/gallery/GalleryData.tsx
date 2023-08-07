import { FC } from 'react'

import loader from '../../assets/loader.gif'
import { useGetAllBreedsDataQuery } from '../../services/mainAPI'
import styles from '../../styles/index.module.scss'

import { Gallery } from './Gallery'

export const GalleryData: FC = () => {
  const { data: breeds, isLoading, error } = useGetAllBreedsDataQuery(null)

  return (
    <div>
      {
        error
          ? <p> Breeds not found </p>
          : isLoading
            ? (
              <div className={styles.loader}>
                <img
                  src={loader}
                  alt="loader"
                />
              </div>
            )
            : (
              breeds && <Gallery breeds={breeds} />
            )
      }
    </div>
  )
}
