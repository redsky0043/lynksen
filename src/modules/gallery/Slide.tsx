import {
  FC, useEffect, useState, useLayoutEffect, useRef,
} from 'react'
import { gsap } from 'gsap'

import { IBreedData, ICatData } from '../../types'
import { Button } from '../../common/components/Button'
import { useGetBreedRandomImageQuery } from '../../services/mainAPI'

import styles from './gallery.module.scss'

interface ISlideProps {
  breed: IBreedData,
  breedsAmount: number,
  index: number,
  currentIndex: number,
}

export const Slide: FC<ISlideProps> = ({
  index,
  breed,
  breedsAmount,
  currentIndex,
}) => {
  const [backgroundColor, setBackgroundColor] = useState('')
  const [selectedBreed, setSelectedBreed] = useState<string>('')
  const [imgSRC, setImgSRC] = useState<string>(breed.image?.url)
  // @ts-ignore
  const { data: catPhotos, error, isLoading } = useGetBreedRandomImageQuery(selectedBreed, {
    skip: !selectedBreed,
  })

  const boxRef = useRef()

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(boxRef.current, {
        y: 100,
      })
    })
    return () => ctx.revert()
  }, [currentIndex])

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
      setImgSRC(state => (catPhotos ? getRandomImageUrl(catPhotos) : state))
    } else {
      setSelectedBreed(breed.id)
    }
  }

  useEffect(() => {
    setImgSRC(state => (catPhotos ? getRandomImageUrl(catPhotos) : state))
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
          <p
            ref={boxRef}
            className={styles.galleryValue}
          >
            {breed.name}
          </p>
          <p className={styles.galleryLabel}>
            About
          </p>
          <p className={styles.galleryDescription}>
            {breed.description}
          </p>
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
