export default async (url, options, params) => {
  console.log('url, options, params')
  console.log(url, options, params)
  try {
    const apiResponse = await $fetch(url, {
      ...options
    })
    return apiResponse
  } catch (err) {
    console.log(err)
  }
}