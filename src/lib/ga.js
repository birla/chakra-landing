const gaKey = require('../../content/data/config.json').google_analytics_key;

// log the pageview with their URL
export const pageview = (url) => {
  if (window.onNextjsRouteChangeComplete) {
  window.gtag('config', gaKey, {
    page_path: url,
  })
}

// log specific events happening.
export const event = ({ action, params }) => {
//   window.gtag('event', action, params)
}