const gaKey = require('../../content/data/config.json').google_analytics_key;

// log the pageview with their URL
export const pageview = (url) => {
  window.gtag('config', "123123", {
    page_path: url,
  })
}

// log specific events happening.
export const event = ({ action, params }) => {
  window.gtag('event', action, params)
}