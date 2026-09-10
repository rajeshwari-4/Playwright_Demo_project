import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('link', { name: 'Gmail' }).click();
  await page.goto('https://www.google.com/');
  await page.getByRole('link', { name: 'About' }).click();
  await page.getByRole('link', { name: 'Products', exact: true }).click();
  await page.getByRole('link', { name: 'Company Info' }).click();
  await page.getByRole('img', { name: 'A collage of several photos,' }).click();
  await page.getByRole('img', { name: 'A collage of several photos,' }).click();
  await page.getByRole('img', { name: 'A collage of several photos,' }).click();
  await page.getByRole('img', { name: 'A collage of several photos,' }).click();
  await page.getByRole('img', { name: 'A collage of several photos,' }).dblclick();
  await page.getByRole('img', { name: 'A collage of several photos,' }).dblclick();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'News' }).click();
  const page1 = await page1Promise;
  await page1.getByLabel('1 billion in balloon font').click();
  await page1.getByLabel('1 billion in balloon font').dblclick();
  await page1.locator('section').filter({ hasText: 'Gemini App More than 1' }).nth(1).click();
  await page1.getByRole('link', { name: 'Feed' }).click();
  await page1.getByRole('button', { name: 'Innovation & AI' }).click();
  await page1.getByRole('button', { name: 'Secondary menu' }).click();
  await page1.locator('div').filter({ hasText: 'The latest news Read our most' }).nth(1).click();
});