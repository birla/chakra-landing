const gaKey = require('../../content/data/config.json').google_analytics_key;

// log the pageview with their URL
export const pageview = (url) => {
  if (window.gtag) {
    window.gtag('config', gaKey, {
        page_path: url,
    })
  } else {
    console.warn('no gtag found')
  }
}

// log specific events happening.
export const event = ({ action, params }) => {
  if (window.gtag) {
    window.gtag('event', action, params)
  } else {
    console.warn('no gtag found')
  }
}