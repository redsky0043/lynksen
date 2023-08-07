import { IBreedData, ICatData } from 'types'

import ROUTES from '../routes'

import { api } from './api'

export const mainAPI = api.injectEndpoints({
  endpoints: build => ({
    getBreedRandomImage: build.query<ICatData[], string[]>({
      query: breedID => ({
        url: `${ROUTES.IMAGES}?breed_ids=${breedID}&limit=100`,
      }),
    }),
    getAllBreedsData: build.query<IBreedData[], null>({
      query: () => ({
        url: ROUTES.BREEDS,
      }),
    }),
  }),
  overrideExisting: false,
})

export const {
  useGetAllBreedsDataQuery,
  useGetBreedRandomImageQuery,
} = mainAPI
