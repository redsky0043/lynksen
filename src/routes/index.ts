const PAGES_ROUTES = {
  PAGES: '/v1/pages',
  CREATE_PAGE: '/v1/pages/create',
  EDIT_PAGE: '/pages/edit/:id',
}

const NOT_FOUND_ROUTE = '/404'

export const ROUTES = {
  IMAGES: '/images/search',
  BREEDS: '/breeds',
  NOT_FOUND_ROUTE,
  ...PAGES_ROUTES,
}

export default ROUTES
