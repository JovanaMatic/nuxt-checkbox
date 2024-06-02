export default async (params) => {
  const defaultParams = {
    format: 'json',
    page: 1,
    cap_dealer: true,
    'f.details.categorize': true,
    append_fields: 'hasstockimage,dealer,address,city,state,zip,phone,cab_style,submodel,subtrim,mpg_city,mpg_highway,dealer_badges,badges,price_drivers,safety_reviews,badge_labels,safe_car,details,bot_name'
  }


  params = { ...defaultParams, ...params }

  if (params.zip) {
    params.tlocation = params.zip
    delete params.zip
  }

  if (params.location) {
    params.tlocation = params.location
    delete params.location
  }

  try {
    const apiData = await $fetch('', { 
      method: 'GET',
      query: params
     })
     return apiData

  } catch (err) {
    console.log(err)
  } finally {
    console.log('API call completed')
  }
}