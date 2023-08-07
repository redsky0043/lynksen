import { FC, useEffect, useState } from 'react'

import { IBreedData, ICatData } from '../../types'
import { Button } from '../../common/components/Button'
import { useGetBreedRandomImageQuery } from '../../services/mainAPI'

import styles from './gallery.module.scss'

interface ISlideProps {
  breed: IBreedData,
  breedsAmount: number,
  index: number,
}

export const Slide: FC<ISlideProps> = ({
  index,
  breed,
  breedsAmount,
}) => {
  const [backgroundColor, setBackgroundColor] = useState('')
  const [selectedBreed, setSelectedBreed] = useState<string>('')
  const [imgSRC, setImgSRS] = useState<string>(breed.image?.url)
  // @ts-ignore
  const { data: catPhotos, error, isLoading } = useGetBreedRandomImageQuery(selectedBreed, {
    skip: !selectedBreed,
  })

  useEffect(() => {
    const randomValue = () => Math.floor(Math.random() * 155) + 100
    const color = `rgb(${randomValue()}, ${randomValue()}, ${randomValue()})`
    setBackgroundColor(color)
  }, [])

  const getRandomImageUrl = (dataArray: ICatData[]) => {
    const randomIndex = Math.floor(Math.random() * dataArray.length)
    const randomObject = dataArray[randomIndex]

    return randomObject?.url
  }

  const handleGenerateBreedRandomPhoto = () => {
    if (selectedBreed) {
      setImgSRS(state => (catPhotos ? getRandomImageUrl(catPhotos) : state))
    } else {
      setSelectedBreed(breed.id)
    }
  }

  useEffect(() => {
    setImgSRS(state => (catPhotos ? getRandomImageUrl(catPhotos) : state))
  }, [catPhotos, selectedBreed])

  return (
    <div
      className={styles.gallerySlide}
      style={{
        backgroundColor,
        backgroundImage: `url(${breed})`,
        zIndex: `${breedsAmount - index}`,
      }}
    >
      <div className={styles.galleryText}>
        <div className={styles.galleryCounterWrap}>
          <p className={styles.galleryCounterCurrent}>
            {`${index + 1} /`}
          </p>
          <p className={styles.galleryCounterAll}>
            {breedsAmount}
          </p>
        </div>
        <div className={styles.galleryInfo}>
          <p className={styles.galleryLabel}>
            Breed
          </p>
          <p className={styles.galleryValue}>
            {breed.name}
          </p>
          <p className={styles.galleryLabel}>
            About
          </p>
          <p className={styles.galleryDescription}>
            {breed.description}
          </p>
          <span />
          {!error ? (
            <Button
              text="Another photo"
              disabled={isLoading}
              callback={handleGenerateBreedRandomPhoto}
            />
          ) : <p> Error by getting random photo </p>}
        </div>
      </div>
      <div className={styles.galleryPicture}>
        {imgSRC
          ? (
            <img
              alt="cat"
              src={imgSRC}
              className={styles.galleryImage}
            />
          )
          : <p> No image </p>
        }
      </div>
    </div>
  )
}
