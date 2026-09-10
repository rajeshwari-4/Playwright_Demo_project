import { test, expect } from '@playwright/test';
test('login to OrangeHRM', async ({ page }) => {
await page.goto('https://opensource-demo.orangehrmlive.com/');

await page.getByPlaceholder('Username').fill('Admin');

await page .waitForTimeout(2000);

await page.getByRole('textbox', { name: 'password' }).fill('admin123');

await page.waitForTimeout(2000);

await page.getByRole('button', { name: 'Login' }).click();

await page.waitForTimeout(2000);

await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();

await console.log('Login successful');

await page.waitForTimeout(2000);

});







