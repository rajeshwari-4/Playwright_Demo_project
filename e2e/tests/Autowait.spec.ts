import { test, expect } from '@playwright/test';

test('autowait with explicit delay', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');

  // Small pause so browser actions are visible
  await page.waitForTimeout(2000);

  // Playwright auto-waits before clicking this link
  await page.getByRole('link', { name: 'More information' }).click();

  // Wait a bit to observe page change
  await page.waitForTimeout(2000);

  // Auto-wait for the heading to appear
  await expect(page.getByRole('heading')).toBeVisible();

  // Fill inputs - Playwright waits until they are ready
  await page.locator('#username').fill('admin');
  await page.waitForTimeout(1000);

  await page.locator('#password').fill('admin123');
  await page.waitForTimeout(1000);

  // Click waits for the button to be actionable
  await page.getByRole('button', { name: 'Sign in' }).click();

  await page.waitForTimeout(2000);

  await expect(page.getByText('Welcome')).toBeVisible();
});

