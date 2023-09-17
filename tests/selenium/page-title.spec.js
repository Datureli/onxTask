const driver = require("./selenium-config");

describe("Przykładowy test", () => {
  before(async () => {
    // Przed rozpoczęciem testu - otwarcie przeglądarki, nawigacja itp.
    await driver.get("https://example.com");
  });

  it("Powinien sprawdzić, czy tytuł strony jest poprawny", async () => {
    const pageTitle = await driver.getTitle();
    assert.equal(pageTitle, "Przykładowa strona");
  });

  after(async () => {
    // Po zakończeniu testu - zamknięcie przeglądarki
    await driver.quit();
  });
});
