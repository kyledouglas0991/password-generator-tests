/* TEST: Scan for common accessibility violations.
NOTE! Test will fail, as page under test has existing ADA violations.

Running this test causes random timeouts in the others when run 
together. */



import { test, expect } from '@playwright/test';

// Import the @axe-core/playwright package
// and install with:   npm install @axe-core/playwright
import AxeBuilder from '@axe-core/playwright';

test.describe('accessibility', () => { 
  test('expect 0 accessibility violations', async ({ page }) => {
    await page.goto('https://www.lastpass.com/features/password-generator#generatorTool'); 

    const scanResults = await new AxeBuilder({ page }).analyze();

    expect(scanResults.violations).toEqual([]);
  });
});
