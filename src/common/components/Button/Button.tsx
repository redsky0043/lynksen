import { FC, memo } from 'react'

import styles from './button.module.scss'

interface IButton {
  text: string,
  disabled?: boolean,
  callback: () => void,
}

const Button: FC<IButton> = ({
  callback,
  text,
  disabled = false,
}) => (
  <button
    type="button"
    onClick={callback}
    disabled={disabled}
    className={styles.button}
  >
    {text}
  </button>
)

export default memo(Button)
