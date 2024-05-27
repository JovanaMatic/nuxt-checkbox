import searchAPI from '../services/searchAPI'

export default eventHandler(async (event) => {
  const query = getQuery(event)
  const facets = ['body_style', 'vehicle_condition', 'price', 'mileage', 'year', 'exterior_color', 'fuel', 'transmission', 'engine', 'feature_groups', 'cap_financing', 'drive_type', 'apollo_displayed_badge']

  const data = await searchAPI('listings', {
    ...query,
    'f.feature_groups.facet.show_all_multivalued_counts': true,
    'f.dealer_badges.facet.show_all_multivalued_counts': true,
    'f.apollo_displayed_badge.facet.show_all_multivalued_counts': true,
    'f.dealer_badges.facet.lower_limit': 0,
    'f.cab_style.facet.exclude': 'cab_style',
    'f.make.facet.exclude': 'make,model,trim',
    'f.make.facet.lower_limit': 0,
    'f.make_model_trim.facet.exclude': 'trim',
    'f.model.facet.exclude': 'model,trim',
    include_attributes: facets.join(',') + ',make,model,make_model_trim,dealer_badges,cab_style',
    ...facets.reduce((acc, key) => {
      return {
        ...acc,
        [`f.${key}.facet.exclude`]: key,
        [`f.${key}.facet.lower_limit`]: 0,
        [`f.${key}.facet.mincount`]: 0
      }
    }, {})
  })
  return data
})