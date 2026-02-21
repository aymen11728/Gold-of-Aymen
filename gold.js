const GRAMS_IN_OUNCE = 31.1035;
const GOLD_21_FACTOR = 0.875;

function calculatePrice(ounce, exchange, grams) {
  const gram21 =
    (ounce / GRAMS_IN_OUNCE) *
    GOLD_21_FACTOR *
    exchange;

  return gram21 * grams;
}

function formatNumber(num) {
  return Number(num).toLocaleString("en-US");
}

const ounceInput = document.getElementById("ounce");
const exchangeInput = document.getElementById("exchange");
const gramsInput = document.getElementById("grams");
const button = document.getElementById("calculate");
const result = document.getElementById("price");

button.addEventListener("click", () => {
  const ounce = parseFloat(ounceInput.value);
  const exchange = parseFloat(exchangeInput.value);
  const grams = parseFloat(gramsInput.value);

  if (!ounce || !exchange || !grams) {
    result.textContent = "يرجى إدخال القيم كاملة";
    return;
  }

  const total = calculatePrice(ounce, exchange, grams);
  result.textContent = formatNumber(total.toFixed(0)) + " IQD";
});