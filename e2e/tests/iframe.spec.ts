import { test, expect } from '@playwright/test';

const practiceUrl = 'https://rahulshettyacademy.com/AutomationPractice/';

test('work with the iframe on the practice page', async ({ page }) => {
  await page.goto(practiceUrl);

  const coursesFrame = page.frameLocator('#courses-iframe');

  await expect(coursesFrame.locator('body')).toBeVisible();
  await expect(coursesFrame.getByText('Courses').first()).toBeVisible();
});

test('open a new tab and switch to it', async ({ page, context }) => {
  await page.goto(practiceUrl);

  const [newTab] = await Promise.all([
    context.waitForEvent('page'),
    page.locator('#opentab').click(),
  ]);


});



