export default defineNuxtRouteMiddleware(async (to) => {
  const search = useSearchStore()
  const { data } = await useFetch('/api/cars', { query: { ...to.query, limit: 18 } })

  search.searchData = data.value.results.data
})