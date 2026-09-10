# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Assertions.spec.ts >> Comprehensive Playwright Assertions Examples >> toHaveURL() - Page has specific URL
- Location: e2e/tests/Assertions.spec.ts:70:7

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://opensource-demo.orangehrmlive.com/"
Received: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
Timeout:  5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    14 × locator resolved to <html>…</html>
       - unexpected value "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"

```

```yaml
- img "company-branding"
- heading "Login" [level=5]
- paragraph: "Username : Admin"
- paragraph: "Password : admin123"
- text:  Username
- textbox "Username"
- text:  Password
- textbox "Password"
- button "Login"
- paragraph: Forgot your password?
- link:
  - /url: https://www.linkedin.com/company/orangehrm/mycompany/
- link:
  - /url: https://www.facebook.com/OrangeHRM/
- link:
  - /url: https://twitter.com/orangehrm?lang=en
- link:
  - /url: https://www.youtube.com/c/OrangeHRMInc
- paragraph: OrangeHRM OS 5.9
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
- img "orangehrm-logo"
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | const URL = 'https://opensource-demo.orangehrmlive.com/';
  4   | 
  5   | test.describe('Comprehensive Playwright Assertions Examples', () => {
  6   |   test.beforeEach(async ({ page }) => {
  7   |     await page.goto(URL);
  8   |   });
  9   | 
  10  |   // ===== VISIBILITY ASSERTIONS =====
  11  |   test('toBeVisible() - Element is visible on the page', async ({ page }) => {
  12  |     const loginHeader = page.getByRole('heading', { name: /login/i });
  13  |     await expect(loginHeader).toBeVisible();
  14  |   });
  15  | 
  16  |   test('toBeHidden() - Element is hidden from the viewport', async ({ page }) => {
  17  |     const hiddenElement = page.locator('[style*="display: none"]').first();
  18  |     // This might not have hidden elements, so we'll test visibility
  19  |     const loginForm = page.locator('form');
  20  |     await expect(loginForm).not.toBeHidden();
  21  |   });
  22  | 
  23  |   // ===== TEXT CONTENT ASSERTIONS =====
  24  |   test('toContainText() - Element contains specific text', async ({ page }) => {
  25  |     const loginForm = page.locator('form');
  26  |     await expect(loginForm).toContainText('Username');
  27  |     await expect(loginForm).toContainText('Password');
  28  |   });
  29  | 
  30  |   test('toHaveText() - Element has exact text content', async ({ page }) => {
  31  |     const usernameField = page.getByPlaceholder('Username');
  32  |     // Text content of input is empty initially
  33  |     await expect(usernameField).toHaveValue('');
  34  |   });
  35  | 
  36  |   // ===== VALUE ASSERTIONS =====
  37  |   test('toHaveValue() - Input field has specific value', async ({ page }) => {
  38  |     const usernameField = page.getByPlaceholder('Username');
  39  |     await usernameField.fill('Admin');
  40  |     await expect(usernameField).toHaveValue('Admin');
  41  |   });
  42  | 
  43  |   test('toBeEmpty() - Input field is empty', async ({ page }) => {
  44  |     const usernameField = page.getByPlaceholder('Username');
  45  |     await expect(usernameField).toBeEmpty();
  46  |   });
  47  | 
  48  |   // ===== ATTRIBUTE ASSERTIONS =====
  49  |   test('toHaveAttribute() - Element has specific attribute', async ({ page }) => {
  50  |     const usernameField = page.getByPlaceholder('Username');
  51  |     await expect(usernameField).toHaveAttribute('name', /username/i);
  52  |     await expect(usernameField).toHaveAttribute('type', 'text');
  53  |   });
  54  | 
  55  |   test('toHaveClass() - Element has specific CSS class', async ({ page }) => {
  56  |     const loginButton = page.getByRole('button', { name: 'Login' });
  57  |     // Check if button has any class
  58  |     const classList = await loginButton.getAttribute('class');
  59  |     expect(classList).toBeTruthy();
  60  |   });
  61  | 
  62  |   // ===== COUNT ASSERTIONS =====
  63  |   test('toHaveCount() - Verify number of elements', async ({ page }) => {
  64  |     const textboxes = page.locator('input[type="text"]');
  65  |     const count = await textboxes.count();
  66  |     expect(count).toBeGreaterThan(0);
  67  |   });
  68  | 
  69  |   // ===== URL ASSERTIONS =====
  70  |   test('toHaveURL() - Page has specific URL', async ({ page }) => {
  71  |     await expect(page).toHaveURL(/orangehrmlive/);
> 72  |     await expect(page).toHaveURL(URL);
      |                        ^ Error: expect(page).toHaveURL(expected) failed
  73  |   });
  74  | 
  75  |   // ===== TITLE ASSERTIONS =====
  76  |   test('toHaveTitle() - Page has specific title', async ({ page }) => {
  77  |     await expect(page).toHaveTitle(/OrangeHRM/i);
  78  |   });
  79  | 
  80  |   // ===== ENABLED/DISABLED ASSERTIONS =====
  81  |   test('toBeEnabled() - Button is enabled', async ({ page }) => {
  82  |     const loginButton = page.getByRole('button', { name: 'Login' });
  83  |     await expect(loginButton).toBeEnabled();
  84  |   });
  85  | 
  86  |   test('toBeDisabled() - Disabled element check', async ({ page }) => {
  87  |     const loginButton = page.getByRole('button', { name: 'Login' });
  88  |     await expect(loginButton).not.toBeDisabled();
  89  |   });
  90  | 
  91  |   // ===== CHECKED ASSERTIONS =====
  92  |   test('toBeChecked() - Checkbox or radio is checked', async ({ page }) => {
  93  |     const checkboxes = page.locator('input[type="checkbox"]');
  94  |     const count = await checkboxes.count();
  95  |     // Check if any checkboxes exist
  96  |     if (count > 0) {
  97  |       const firstCheckbox = checkboxes.first();
  98  |       await expect(firstCheckbox).not.toBeChecked();
  99  |     }
  100 |   });
  101 | 
  102 |   // ===== EDITABLE ASSERTIONS =====
  103 |   test('toBeEditable() - Input field is editable', async ({ page }) => {
  104 |     const usernameField = page.getByPlaceholder('Username');
  105 |     await expect(usernameField).toBeEditable();
  106 |   });
  107 | 
  108 |   // ===== FOCUSED ASSERTIONS =====
  109 |   test('toBeFocused() - Element is focused', async ({ page }) => {
  110 |     const usernameField = page.getByPlaceholder('Username');
  111 |     await usernameField.focus();
  112 |     await expect(usernameField).toBeFocused();
  113 |   });
  114 | 
  115 |   // ===== IN VIEWPORT ASSERTIONS =====
  116 |   test('toBeInViewport() - Element is visible in viewport', async ({ page }) => {
  117 |     const loginButton = page.getByRole('button', { name: 'Login' });
  118 |     await expect(loginButton).toBeInViewport();
  119 |   });
  120 | 
  121 |   // ===== NUMERIC COMPARISONS =====
  122 |   test('Numeric Assertions - Compare values', async ({ page }) => {
  123 |     const elements = page.locator('input');
  124 |     const count = await elements.count();
  125 |     
  126 |     expect(count).toBeGreaterThan(0);
  127 |     expect(count).toBeGreaterThanOrEqual(1);
  128 |     expect(count).toBeLessThan(100);
  129 |     expect(count).toBeLessThanOrEqual(100);
  130 |   });
  131 | 
  132 |   // ===== STRING ASSERTIONS =====
  133 |   test('String Assertions - Text matching', async ({ page }) => {
  134 |     const pageTitle = await page.title();
  135 |     
  136 |     expect(pageTitle).toMatch(/OrangeHRM/i);
  137 |     expect(pageTitle).toContain('OrangeHRM');
  138 |     expect(pageTitle).toBeTruthy();
  139 |     expect(pageTitle).not.toBeFalsy();
  140 |   });
  141 | 
  142 |   // ===== LOGIN TEST WITH MULTIPLE ASSERTIONS =====
  143 |   test('Complete Login Test - Multiple Assertions', async ({ page }) => {
  144 |     // Check initial page state
  145 |     await expect(page).toHaveURL(URL);
  146 |     await expect(page).toHaveTitle(/OrangeHRM/i);
  147 | 
  148 |     // Check username field
  149 |     const usernameField = page.getByPlaceholder('Username');
  150 |     await expect(usernameField).toBeVisible();
  151 |     await expect(usernameField).toBeEditable();
  152 |     await expect(usernameField).toBeEmpty();
  153 | 
  154 |     // Fill username
  155 |     await usernameField.fill('Admin');
  156 |     await expect(usernameField).toHaveValue('Admin');
  157 | 
  158 |     // Check password field
  159 |     const passwordField = page.getByRole('textbox', { name: 'password' });
  160 |     await expect(passwordField).toBeVisible();
  161 |     await expect(passwordField).toBeEditable();
  162 | 
  163 |     // Fill password
  164 |     await passwordField.fill('admin123');
  165 |     await expect(passwordField).toHaveValue('admin123');
  166 | 
  167 |     // Check login button
  168 |     const loginButton = page.getByRole('button', { name: 'Login' });
  169 |     await expect(loginButton).toBeVisible();
  170 |     await expect(loginButton).toBeEnabled();
  171 | 
  172 |     // Click login
```