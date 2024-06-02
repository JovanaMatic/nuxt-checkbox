export default defineNuxtRouteMiddleware(async (to) => {
  const search = useSearchStore()
  const { data } = await useFetch('/api/cars', { query: { ...to.query, limit: 18 } })

  search.searchData = data.value.results.data
  const lastLocation = useCookie('lastLocation', { maxAge: 315360000000 })
  lastLocation.value = to.query.location
})