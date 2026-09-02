// Launch configuration — edit these before deploying. Every page reads this file.
window.ALLUS_CONFIG = {
  // Public site origin (used for canonical / Open Graph URLs)
  siteUrl: 'https://www.allus.ai',
  // Contact form: POST endpoint (Formspree, HubSpot Forms API, Zapier, your own API).
  // Leave empty to fall back to a pre-filled mailto: link.
  formEndpoint: '',
  formFallbackEmail: 'contact@allus.ai',
  // Analytics: GA4 measurement id ('G-XXXXXXX') or Plausible domain. Empty = disabled.
  ga4Id: '',
  plausibleDomain: '',
  // Metrics gate: figures on the site (78%, 77%, 32%, 10x, 99% ...) are ILLUSTRATIVE placeholders
  // borrowed from comparable public deployments. Set to true ONLY after replacing them in
  // allus-content.js with figures approved by Allus. While false, pages hide numeric claims
  // and show qualitative statements instead.
  approvedMetrics: false,
  // Legal entity shown in the footer
  legalName: 'Allus AI Inc.',
  legalAddress: 'Atlanta, Georgia, USA'
};
