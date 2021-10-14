// import getData from '../../content/data/config';

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