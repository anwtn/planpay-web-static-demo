// Based off https://docs.planpay.com/docs/developers/price-preview-integration/loading-the-price-preview-widget

// Initialize the PlanPay Web Components library with default options.
// This will manage the loading of the PlanPay JavaScript SDK onto the current page.
import { planpay } from "@planpay/web";

// To target the sandbox (sbx) environment, provide the 'sbx' value for the environment.
planpay.init({
  environment: "sbx",
  showDebug: true,
});

planpay.pricePreview.refresh();
planpay.checkout.refresh();