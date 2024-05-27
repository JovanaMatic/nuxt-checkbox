export default async (url) => {
  const defaultOptions = {
    method: 'GET'
  }
  try {
    const apiResponse = await $fetch(url, {
      ...defaultOptions
    })
    return apiResponse
  } catch (err) {
    console.log(err)
  }
}