export interface ICatData {
  id: number,
  url: string,
}

export interface IBreedDataImage {
  url: string,
}

export interface IBreedData {
  id: string,
  name: string,
  description: string,
  image: IBreedDataImage,
}
