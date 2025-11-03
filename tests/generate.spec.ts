// TEST: Generation of a new password.

import { test, expect } from '@playwright/test';

test('generate', async ({ page }) => {
  // grant access to clipboard, access permissions via the page fixture
  await page.context().grantPermissions(['clipboard-read', 'clipboard-write']);
  // go to test page
  await page.goto('https://www.lastpass.com/features/password-generator#generatorTool');

  // click the 'copy password' button
  await page.getByText(' Copy password ').click();
  // close pop-up 
  await page.locator('button.lp-popup__top-close').click();
  // assign clipboard content
  const clipboard = await page.evaluate(() => navigator.clipboard.readText());

  // generate new password via password reload button
  await page.locator('button.lp-pg-generated-password__icon.lp-pg-generated-password__icon-generate.lp-webbtn')
    .click();
  // click the 'copy password' button
  await page.getByText(' Copy password ').click();
  // close pop-up 
  await page.locator('button.lp-popup__top-close').click();
  // assign clipboard content
  const newClipboard = await page.evaluate(() => navigator.clipboard.readText());

  // compare the two values
  expect(clipboard).not.toEqual(newClipboard);
});