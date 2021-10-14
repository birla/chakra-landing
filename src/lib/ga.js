import _ from 'lodash';

// log the pageview with their URL
export const pageview = (url) => {
  window.gtag('config', (_.get(thisprops, 'data.config.google_analytics_key', null) || ''), {
    page_path: url,
  })
}

// log specific events happening.
export const event = ({ action, params }) => {
  window.gtag('event', action, params)
}