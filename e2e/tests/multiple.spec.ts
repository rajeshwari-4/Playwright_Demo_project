import { test, expect } from '@playwright/test';

test('Test on multiple browsers', async ({ page }) => {
  await page.goto('https://www.google.com/');
  const title = await page.title();
  console.log(`Page title: ${title}`);
  expect(title).toBeTruthy();
});