import { FC } from 'react'

import loader from '../../assets/loader.gif'
import styles from '../../styles/index.module.scss'
import { Cursor } from '../../common/components/Cursor'
import { useGetAllBreedsDataQuery } from '../../services/mainAPI'

import { Gallery } from './Gallery'

export const GalleryData: FC = () => {
  const { data: breeds, isLoading, error } = useGetAllBreedsDataQuery(null)

  return (
    <div className={!isLoading ? 'loaded' : 'loading'}>
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
      {!isLoading && <Cursor />}
    </div>
  )
}
