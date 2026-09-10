import {test, expect} from '@playwright/test';

test.describe('iframe, handling ', () => {
    test('the iframe itself is visible on the main page ', async ({page}) => {
        await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

        await page.waitForTimeout(2000);

      await expect(page.locator('#courses-iframe')).toBeVisible();

      await page.waitForTimeout(2000);
    });
});