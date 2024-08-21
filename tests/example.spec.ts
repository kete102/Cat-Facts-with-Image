import { test, expect } from "@playwright/test"

const LOCALHOST_URL = "http://localhost:5173/"
const API_PREFIX_URL = "https://cataas.com"

test("apps shows random fact and image", async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const text = page.getByRole("paragraph")
  const img = page.getByRole("img")

  const textContent = await text.textContent()
  const imageSrc = await img.getAttribute("src")

  expect(textContent?.length).toBeGreaterThan(0)
  expect(imageSrc?.startsWith(API_PREFIX_URL)).toBeTruthy()
})
