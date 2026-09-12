/* ---------------------------------------------------------------------------
   Runtime configuration for FieldMaxx.
   THIS FILE IS PUBLIC. Never put a Stripe secret key (sk_live_... / sk_test_...) here.
--------------------------------------------------------------------------- */
window.SITE_CONFIG = {
  // SHA-256 of the admin passphrase.
  admin: { passHash: "5b9e9741342f4f8a87a03b52634853031e9478d49220cadd57e189392e0b7bb3" },

  business: {
    company:   "FieldMaxx",
    street:    "",
    city:      "Dallas",
    state:     "TX",
    zip:       "75201",
    phone:     "+1 800 435 5629"
  },

  // Stripe Checkout Sessions endpoint (Vercel serverless function)
  checkoutEndpoint: "/api/create-checkout",

  // Payment Links — not used (we use checkoutEndpoint instead)
  paymentLinks: {
    "FM-FX14G": "",
    "FM-FX10C": "",
    "FM-FXD902": "",
    "FM-FXCAB": ""
  }
};
