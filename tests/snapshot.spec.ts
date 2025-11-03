// TEST: State of layout vs a snapshot of record.

import { test, expect } from '@playwright/test';

test('snapshot', async ({ page }) => {
  // Go to test page
  await page.goto('https://www.lastpass.com/features/password-generator#generatorTool');

  /* Assert against image of record (found under /tests directory)
  with 1000px allowance to account for dynamic password string. 
  You could also mask the form input element, examples of which
  are commented below this test's body. */
  await expect(page).toHaveScreenshot('password-generator.png', { maxDiffPixels: 1000, timeout: 10000 });
});





/* Take snapshot of password generator layout
  while masking dynamic string field */
  /*
  await page.screenshot({ 
        path: 'password-generator.png', 
        mask: [
            page.locator('div[class="genForm"]')
        ] 
    });
  */

  // Reference img password-generator.png found at the project root level

  // Compare new screenshot to reference
  /* 
  expect(await page.screenshot({  
        path: 'password-generator.png',
        mask: [
          page.locator('div[class="genForm"]')
        ]
    })).toMatchSnapshot('password-generator')
  */