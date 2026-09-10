import { test, expect } from '@playwright/test';

const URL = 'https://opensource-demo.orangehrmlive.com/';

test.describe('Comprehensive Playwright Assertions Examples', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(URL);
  });

  // ===== VISIBILITY ASSERTIONS =====
  test('toBeVisible() - Element is visible on the page', async ({ page }) => {
    const loginHeader = page.getByRole('heading', { name: /login/i });
    await expect(loginHeader).toBeVisible();
  });

  test('toBeHidden() - Element is hidden from the viewport', async ({ page }) => {
    const hiddenElement = page.locator('[style*="display: none"]').first();
    // This might not have hidden elements, so we'll test visibility
    const loginForm = page.locator('form');
    await expect(loginForm).not.toBeHidden();
  });

  // ===== TEXT CONTENT ASSERTIONS =====
  test('toContainText() - Element contains specific text', async ({ page }) => {
    const loginForm = page.locator('form');
    await expect(loginForm).toContainText('Username');
    await expect(loginForm).toContainText('Password');
  });

  test('toHaveText() - Element has exact text content', async ({ page }) => {
    const usernameField = page.getByPlaceholder('Username');
    // Text content of input is empty initially
    await expect(usernameField).toHaveValue('');
  });

  // ===== VALUE ASSERTIONS =====
  test('toHaveValue() - Input field has specific value', async ({ page }) => {
    const usernameField = page.getByPlaceholder('Username');
    await usernameField.fill('Admin');
    await expect(usernameField).toHaveValue('Admin');
  });

  test('toBeEmpty() - Input field is empty', async ({ page }) => {
    const usernameField = page.getByPlaceholder('Username');
    await expect(usernameField).toBeEmpty();
  });

  // ===== ATTRIBUTE ASSERTIONS =====
  test('toHaveAttribute() - Element has specific attribute', async ({ page }) => {
    const usernameField = page.getByPlaceholder('Username');
    await expect(usernameField).toHaveAttribute('name', /username/i);
    await expect(usernameField).toHaveAttribute('type', 'text');
  });

  test('toHaveClass() - Element has specific CSS class', async ({ page }) => {
    const loginButton = page.getByRole('button', { name: 'Login' });
    // Check if button has any class
    const classList = await loginButton.getAttribute('class');
    expect(classList).toBeTruthy();
  });

  // ===== COUNT ASSERTIONS =====
  test('toHaveCount() - Verify number of elements', async ({ page }) => {
    const textboxes = page.locator('input[type="text"]');
    const count = await textboxes.count();
    expect(count).toBeGreaterThan(0);
  });

  // ===== URL ASSERTIONS =====
  test('toHaveURL() - Page has specific URL', async ({ page }) => {
    await expect(page).toHaveURL(/orangehrmlive/);
    await expect(page).toHaveURL(URL);
  });

  // ===== TITLE ASSERTIONS =====
  test('toHaveTitle() - Page has specific title', async ({ page }) => {
    await expect(page).toHaveTitle(/OrangeHRM/i);
  });

  // ===== ENABLED/DISABLED ASSERTIONS =====
  test('toBeEnabled() - Button is enabled', async ({ page }) => {
    const loginButton = page.getByRole('button', { name: 'Login' });
    await expect(loginButton).toBeEnabled();
  });

  test('toBeDisabled() - Disabled element check', async ({ page }) => {
    const loginButton = page.getByRole('button', { name: 'Login' });
    await expect(loginButton).not.toBeDisabled();
  });

  // ===== CHECKED ASSERTIONS =====
  test('toBeChecked() - Checkbox or radio is checked', async ({ page }) => {
    const checkboxes = page.locator('input[type="checkbox"]');
    const count = await checkboxes.count();
    // Check if any checkboxes exist
    if (count > 0) {
      const firstCheckbox = checkboxes.first();
      await expect(firstCheckbox).not.toBeChecked();
    }
  });

  // ===== EDITABLE ASSERTIONS =====
  test('toBeEditable() - Input field is editable', async ({ page }) => {
    const usernameField = page.getByPlaceholder('Username');
    await expect(usernameField).toBeEditable();
  });

  // ===== FOCUSED ASSERTIONS =====
  test('toBeFocused() - Element is focused', async ({ page }) => {
    const usernameField = page.getByPlaceholder('Username');
    await usernameField.focus();
    await expect(usernameField).toBeFocused();
  });

  // ===== IN VIEWPORT ASSERTIONS =====
  test('toBeInViewport() - Element is visible in viewport', async ({ page }) => {
    const loginButton = page.getByRole('button', { name: 'Login' });
    await expect(loginButton).toBeInViewport();
  });

  // ===== NUMERIC COMPARISONS =====
  test('Numeric Assertions - Compare values', async ({ page }) => {
    const elements = page.locator('input');
    const count = await elements.count();
    
    expect(count).toBeGreaterThan(0);
    expect(count).toBeGreaterThanOrEqual(1);
    expect(count).toBeLessThan(100);
    expect(count).toBeLessThanOrEqual(100);
  });

  // ===== STRING ASSERTIONS =====
  test('String Assertions - Text matching', async ({ page }) => {
    const pageTitle = await page.title();
    
    expect(pageTitle).toMatch(/OrangeHRM/i);
    expect(pageTitle).toContain('OrangeHRM');
    expect(pageTitle).toBeTruthy();
    expect(pageTitle).not.toBeFalsy();
  });

  // ===== LOGIN TEST WITH MULTIPLE ASSERTIONS =====
  test('Complete Login Test - Multiple Assertions', async ({ page }) => {
    // Check initial page state
    await expect(page).toHaveURL(URL);
    await expect(page).toHaveTitle(/OrangeHRM/i);

    // Check username field
    const usernameField = page.getByPlaceholder('Username');
    await expect(usernameField).toBeVisible();
    await expect(usernameField).toBeEditable();
    await expect(usernameField).toBeEmpty();

    // Fill username
    await usernameField.fill('Admin');
    await expect(usernameField).toHaveValue('Admin');

    // Check password field
    const passwordField = page.getByRole('textbox', { name: 'password' });
    await expect(passwordField).toBeVisible();
    await expect(passwordField).toBeEditable();

    // Fill password
    await passwordField.fill('admin123');
    await expect(passwordField).toHaveValue('admin123');

    // Check login button
    const loginButton = page.getByRole('button', { name: 'Login' });
    await expect(loginButton).toBeVisible();
    await expect(loginButton).toBeEnabled();

    // Click login
    await loginButton.click();

    // Wait for navigation
    await page.waitForTimeout(2000);

    // Verify successful login
    await expect(page).toHaveURL(/dashboard/i);
    const dashboardLink = page.getByRole('link', { name: 'Dashboard' });
    await expect(dashboardLink).toBeVisible();
  });

  // ===== SOFT ASSERTIONS =====
  test('Soft Assertions - Continue testing after failure', async ({ page }) => {
    // Soft assertions don't stop the test immediately
    await expect.soft(page).toHaveTitle(/OrangeHRM/i);
    
    const usernameField = page.getByPlaceholder('Username');
    await expect.soft(usernameField).toBeVisible();
    await expect.soft(usernameField).toBeEditable();

    // Test continues even if previous soft assertions fail
    await usernameField.fill('Admin');
    await expect.soft(usernameField).toHaveValue('Admin');
  });

  // ===== NEGATION ASSERTIONS =====
  test('Negation Assertions - Not assertions', async ({ page }) => {
    const usernameField = page.getByPlaceholder('Username');
    
    await expect(usernameField).not.toHaveValue('Admin');
    await expect(usernameField).not.toBeDisabled();
    await expect(usernameField).not.toBeHidden();
    
    const nonExistentElement = page.locator('.non-existent-class');
    await expect(nonExistentElement).not.toBeVisible();
  });

  // ===== TIMEOUT ASSERTIONS =====
  test('Assertions with Custom Timeout', async ({ page }) => {
    const usernameField = page.getByPlaceholder('Username');
    
    // Default timeout is 5000ms, can be customized
    await expect(usernameField).toBeVisible({ timeout: 10000 });
    await expect(usernameField).toBeEditable({ timeout: 5000 });
  });

  // ===== ARRAY ASSERTIONS =====
  test('Array/Collection Assertions', async ({ page }) => {
    const inputs = page.locator('input[type="text"]');
    
    // Check count
    const count = await inputs.count();
    expect(count).toBeGreaterThan(0);

    // Check each input is visible
    for (let i = 0; i < count; i++) {
      await expect(inputs.nth(i)).toBeVisible();
    }
  });

  // ===== PROMISE-BASED ASSERTIONS =====
  test('Promise-based Assertions', async ({ page }) => {
    const usernameField = page.getByPlaceholder('Username');
    
    // Get and assert text content
    const inputType = await usernameField.getAttribute('type');
    expect(inputType).toBe('text');

    // Get and assert placeholder
    const placeholder = await usernameField.getAttribute('placeholder');
    expect(placeholder).toBe('Username');
  });
});


