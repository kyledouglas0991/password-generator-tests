// TEST: Scan for accessibility issues.
// NOTE! Page under test has multiple pre-existing violations.

import { test, expect } from '@playwright/test';

// Import the @axe-core/playwright package
// and install with: npm install @axe-core/playwright
import AxeBuilder from '@axe-core/playwright';

test('accessibility', async ({ page }) => {
  await page.goto('https://www.lastpass.com/features/password-generator#generatorTool'); 
  const scanResults = await new AxeBuilder({ page }).analyze();
  expect(scanResults.violations).toEqual([]);
});
