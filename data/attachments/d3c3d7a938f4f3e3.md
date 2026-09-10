# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Autowait.spec.ts >> autowait with explicit delay
- Location: e2e/tests/Autowait.spec.ts:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'More information' })

```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e6]:
    - img "company-branding" [ref=e8]
    - generic [ref=e9]:
      - heading "Login" [level=5] [ref=e10]
      - generic [ref=e11]:
        - generic [ref=e13]:
          - paragraph [ref=e14]: "Username : Admin"
          - paragraph [ref=e15]: "Password : admin123"
        - generic [ref=e16]:
          - generic [ref=e18]:
            - generic [ref=e19]:
              - generic [ref=e20]: 
              - generic [ref=e21]: Username
            - textbox "Username" [active] [ref=e23]
          - generic [ref=e25]:
            - generic [ref=e26]:
              - generic [ref=e27]: 
              - generic [ref=e28]: Password
            - textbox "Password" [ref=e30]
          - button "Login" [ref=e32] [cursor=pointer]
          - paragraph [ref=e34] [cursor=pointer]: Forgot your password?
      - generic [ref=e35]:
        - generic [ref=e36]:
          - link [ref=e37] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/orangehrm/mycompany/
          - link [ref=e40] [cursor=pointer]:
            - /url: https://www.facebook.com/OrangeHRM/
          - link [ref=e43] [cursor=pointer]:
            - /url: https://twitter.com/orangehrm?lang=en
          - link [ref=e46] [cursor=pointer]:
            - /url: https://www.youtube.com/c/OrangeHRMInc
        - generic [ref=e49]:
          - paragraph [ref=e50]: OrangeHRM OS 5.9
          - paragraph [ref=e51]:
            - text: © 2005 - 2026
            - link "OrangeHRM, Inc" [ref=e52] [cursor=pointer]:
              - /url: http://www.orangehrm.com
            - text: . All rights reserved.
  - img "orangehrm-logo" [ref=e54]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('autowait with explicit delay', async ({ page }) => {
  4  |   await page.goto('https://opensource-demo.orangehrmlive.com/');
  5  | 
  6  |   // Small pause so browser actions are visible
  7  |   await page.waitForTimeout(2000);
  8  | 
  9  |   // Playwright auto-waits before clicking this link
> 10 |   await page.getByRole('link', { name: 'More information' }).click();
     |                                                              ^ Error: locator.click: Test timeout of 30000ms exceeded.
  11 | 
  12 |   // Wait a bit to observe page change
  13 |   await page.waitForTimeout(2000);
  14 | 
  15 |   // Auto-wait for the heading to appear
  16 |   await expect(page.getByRole('heading')).toBeVisible();
  17 | 
  18 |   // Fill inputs - Playwright waits until they are ready
  19 |   await page.locator('#username').fill('admin');
  20 |   await page.waitForTimeout(1000);
  21 | 
  22 |   await page.locator('#password').fill('admin123');
  23 |   await page.waitForTimeout(1000);
  24 | 
  25 |   // Click waits for the button to be actionable
  26 |   await page.getByRole('button', { name: 'Sign in' }).click();
  27 | 
  28 |   await page.waitForTimeout(2000);
  29 | 
  30 |   await expect(page.getByText('Welcome')).toBeVisible();
  31 | });
  32 | 
  33 | 
```