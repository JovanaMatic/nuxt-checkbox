import apiCall from '../utils/apiCall'

export default (params) => {
  const defaultParams = {
    format: 'json',
    page: 1,
    cap_dealer: true,
    'f.details.categorize': true,
    append_fields: 'hasstockimage,dealer,address,city,state,zip,phone,cab_style,submodel,subtrim,mpg_city,mpg_highway,dealer_badges,badges,price_drivers,safety_reviews,badge_labels,safe_car,details,bot_name'
  }


  params = { ...defaultParams, ...params }
  params.apikey = ''

  const baseURL = ''

  return apiCall(baseURL, { query: params })
}