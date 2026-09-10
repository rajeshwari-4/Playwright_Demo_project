# Playwright_Demo_project

End-to-end UI and API test automation project built with [Playwright](https://playwright.dev/) and TypeScript.

## Tech stack

- [@playwright/test](https://playwright.dev/docs/intro) — test runner and browser automation
- TypeScript
- GitHub Actions — runs the suite on every push/PR to `main`/`master`

## Project structure

```
e2e/
  login.spec.ts          # Login flow tests
  tests/
    Assertions.spec.ts   # Assertion examples
    Autowait.spec.ts     # Playwright auto-waiting behavior
    apitesting.spec.ts   # API request testing
    browserdemo.spec.ts  # Basic browser interactions
    example.spec.ts      # Sample Playwright test
    frame.spec.ts        # Frame handling
    iframe.spec.ts       # iFrame handling
    google.spec.ts       # Google search demo
    locator.spec.ts      # Locator strategies
    multiple.spec.ts     # Multiple tabs/windows
    orange.spec.ts       # OrangeHRM demo site tests
playwright.config.ts     # Playwright configuration (Chromium, Firefox, WebKit)
.github/workflows/       # CI pipeline for automated test runs
```

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS)

### Installation

```bash
npm install
npx playwright install
```

### Running tests

```bash
# Run the full suite (headless)
npx playwright test

# Run in headed mode
npx playwright test --headed

# Run a specific file
npx playwright test e2e/tests/locator.spec.ts

# Open the HTML report after a run
npx playwright show-report
```

## Allure reporting

Test results are also collected as [Allure](https://allurereport.org/) results via `allure-playwright`.

```bash
# Run tests (writes results to allure-results/)
npm test

# Generate the HTML report from the results
npm run allure:generate

# Open the generated report locally
npm run allure:open
```

## Continuous Integration

Tests run automatically via GitHub Actions on every push and pull request to `main`/`master` (see `.github/workflows/playwright.yml`).

- The Playwright HTML report is uploaded as a build artifact.
- The Allure report is generated and published to GitHub Pages on every run of `main`/`master`, with history carried over from the previous run. Once GitHub Pages is enabled for this repo (Settings → Pages → Source: `gh-pages` branch), the latest report is available at:
  `https://rajeshwari-4.github.io/Playwright_Demo_project/`
