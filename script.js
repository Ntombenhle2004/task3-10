// Tab switching
document.querySelectorAll(".tab").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".tab")
      .forEach((b) => b.classList.remove("active"));
    document
      .querySelectorAll(".tab-content")
      .forEach((sec) => sec.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});

// File Transfer Calculator
function calculateFileTransfer() {
  const fileSize = parseFloat(document.getElementById("fileSize").value);
  const fileUnit = document.getElementById("fileUnit").value;
  const speed = parseFloat(document.getElementById("speed").value);
  const speedUnit = document.getElementById("speedUnit").value;

  if (isNaN(fileSize) || isNaN(speed)) {
    document.getElementById("fileResult").textContent =
      "Please enter valid numbers.";
    return;
  }

  let sizeMB = fileUnit === "GB" ? fileSize * 1024 : fileSize;
  let speedMBps = speedUnit === "Mbps" ? speed / 8 : speed;

  const timeSeconds = sizeMB / speedMBps;
  const hours = Math.floor(timeSeconds / 3600);
  const minutes = Math.floor((timeSeconds % 3600) / 60);
  const seconds = Math.floor(timeSeconds % 60);

  document.getElementById(
    "fileResult"
  ).textContent = `Estimated Time: ${hours}h ${minutes}m ${seconds}s`;
}

// Temperature Converter
function convertTemperature() {
  const temp = parseFloat(document.getElementById("tempInput").value);
  const unit = document.getElementById("tempUnit").value;

  if (isNaN(temp)) {
    document.getElementById("tempResult").textContent =
      "Please enter a temperature.";
    return;
  }

  let result =
    unit === "C"
      ? (temp * 9) / 5 + 32 + "°F"
      : (((temp - 32) * 5) / 9).toFixed(2) + "°C";
  document.getElementById("tempResult").textContent = `Converted: ${result}`;
}

// Scientific Notation Converter
function convertToScientific() {
  const number = parseFloat(document.getElementById("sciInput").value);
  if (isNaN(number)) {
    document.getElementById("sciResult").textContent = "Enter a valid number.";
    return;
  }
  document.getElementById(
    "sciResult"
  ).textContent = `Scientific Notation: ${number.toExponential()}`;
}

// Metric Prefix Converter
function convertMetric() {
  const value = parseFloat(document.getElementById("metricValue").value);
  const from = parseFloat(document.getElementById("fromMetric").value);
  const to = parseFloat(document.getElementById("toMetric").value);

  if (isNaN(value)) {
    document.getElementById("metricResult").textContent =
      "Enter a valid value.";
    return;
  }

  const result = (value * from) / to;
  document.getElementById("metricResult").textContent = `Converted: ${result}`;
}
