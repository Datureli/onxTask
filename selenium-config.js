const { Builder } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

// Konfiguracja opcji przeglądarki (np. Chrome)
const options = new chrome.Options();
options.addArguments("--headless"); // Opcjonalnie: uruchamianie w trybie headless

// Utworzenie instancji przeglądarki
const driver = new Builder()
  .forBrowser("chrome") // Wybierz przeglądarkę (możesz użyć innych dostępnych opcji)
  .setChromeOptions(options)
  .build();

module.exports = driver;
