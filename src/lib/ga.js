// import getData from '../../content/data/config';
const conf = require('../../content/data/config.json')

// log the pageview with their URL
export const pageview = (url) => {
  window.gtag('config', (_.get(this.props, 'data.config.google_analytics_key', null) || ''), {
    page_path: url,
  })
}

// log specific events happening.
export const event = ({ action, params }) => {
  window.gtag('event', action, params)
}