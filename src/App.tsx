import { FC } from 'react'
import { Provider } from 'react-redux'

import { store } from './store/store'
import './styles/index.module.scss'
import { GalleryData } from './modules/gallery'

const App: FC = () => (
  <Provider store={store}>
    <GalleryData />
  </Provider>
)

export default App
