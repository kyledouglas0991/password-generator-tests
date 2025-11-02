// TEST: Password string length boundary values.

import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  // grant access to clipboard, access permissions via the page fixture
  await page.context().grantPermissions(['clipboard-read', 'clipboard-write']);
  // go to test page
  await page.goto('https://www.lastpass.com/features/password-generator#generatorTool');
});

test('min', async ({ page }) => {
  // get slider bounding box
  const box = await page.locator('#lp-pg-password-range').boundingBox();

  // click min value (1) or else log message to console if slider isn't found
  if (box !== null) {
    // click min value (1)
    await page.mouse.click(box.x + box.width / 35, box.y + box.height / 2);

    // click 'copy password' button
    await page.getByText(' Copy password ').click();

    // close pop-up 
    await page.locator('button.lp-popup__top-close').click();

    // assign clipboard content and validate
    const clipboard = await page.evaluate(() => navigator.clipboard.readText());

    expect(clipboard.length).toEqual(1);
  } else {
    throw new Error('Test failed: slider not found')
  };
});

test('max', async ({ page }) => {
  // get slider bounding box
  const box = await page.locator('#lp-pg-password-range').boundingBox();

  // click max value (50) or else log message to console if slider isn't found
  if (box !== null) {
    // click max value (50)
    await page.mouse.click(box.x + box.width / 1.001, box.y + box.height / 2);

    // click 'copy password' button
    await page.getByText(' Copy password ').click();

    // close pop-up 
    await page.locator('button.lp-popup__top-close').click();

    // assign clipboard content and validate
    const clipboard = await page.evaluate(() => navigator.clipboard.readText());

    expect(clipboard.length).toEqual(50);
  } else {
    throw new Error('Test failed: slider not found')
  };
});