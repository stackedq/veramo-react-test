jest.setTimeout(20000);

describe("React App", () => {
  beforeAll(async () => {
    await page.goto("http://localhost:3000");
  });

  it("should display a react logo", async () => {
    await expect(page).toMatch("React");
  });
});
