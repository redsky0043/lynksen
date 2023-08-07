import {
  FC, memo, useRef, useEffect, MouseEvent,
} from 'react'
import { gsap } from 'gsap'

import styles from './Cursor.module.scss'

const Cursor: FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const pointRef = useRef<HTMLDivElement>(null)

  const moveCursor = (e: MouseEvent): void => {
    gsap.to(cursorRef.current, {
      x: e.clientX - 30,
      y: e.clientY - 30,
      duration: 1.2,
    })
    gsap.to(pointRef.current, {
      x: e.clientX,
      y: e.clientY,
    })
  }

  useEffect(() => {
    // @ts-ignore
    window.addEventListener('mousemove', moveCursor)

    return () => {
      // @ts-ignore
      window.removeEventListener('mousemove', moveCursor)
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className={styles.cursor}
      />
      <div
        ref={pointRef}
        className={styles.point}
      />
    </>
  )
}

export default memo(Cursor)
