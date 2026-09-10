import { test } from '@playwright/test';

test('navigate to google', async ({ page }) => {
  await page.goto('https://www.google.com/');
});
