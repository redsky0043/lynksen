import { gsap } from 'gsap'
import { FC, useState, useRef } from 'react'

import { Button } from '../../common/components/Button'
import { IBreedData } from '../../types'

import styles from './gallery.module.scss'
import { Slide } from './Slide'

interface IGalleryProps {
  breeds: IBreedData[]
}

export const Gallery: FC<IGalleryProps> = ({ breeds }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const sliderRef = useRef<HTMLDivElement | null>(null)
  const breedsAmount = breeds.length

  const nextSlide = () => {
    const currentSlide = sliderRef.current && sliderRef.current.children[currentIndex]
    const nextIndex = currentIndex + 1

    gsap.to(currentSlide, { xPercent: -100, duration: 1.5 })

    setCurrentIndex(nextIndex < breedsAmount - 1 ? nextIndex : breedsAmount)
  }

  const prevSlide = () => {
    const currentSlide = sliderRef.current && sliderRef.current.children[currentIndex - 1]
    const prevIndex = currentIndex - 1

    gsap.to(currentSlide, { xPercent: 0, duration: 1.5 })

    setCurrentIndex(currentIndex > 0 ? prevIndex : 0)
  }

  return (
    <div className={styles.gallery}>
      <h2 className={styles.galleryTitle}>
        BREEDS
      </h2>
      <div ref={sliderRef}>
        {breeds.map((breed, index) => (
          <Slide
            index={index}
            breed={breed}
            key={breed.id}
            breedsAmount={breedsAmount}
          />
        ))}
      </div>
      <div className={styles.galleryActions}>
        <Button
          text="Prev"
          callback={prevSlide}
        />
        <Button
          text="Next"
          callback={nextSlide}
        />
      </div>
    </div>
  )
}
