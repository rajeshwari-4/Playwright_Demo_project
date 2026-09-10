import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByText('AboutStoreGmailImagesSign in').click();
  await expect(page).toHaveTitle('Google');
});
