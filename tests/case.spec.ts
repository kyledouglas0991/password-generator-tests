// TEST: Check all case values.

import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  // grant access to clipboard, access permissions via the page fixture
  await page.context().grantPermissions(['clipboard-read', 'clipboard-write']);
  // go to test page
  await page.goto('https://www.lastpass.com/features/password-generator#generatorTool');
});

test('uppercase', async ({ page }) => {
    // uncheck all except uppercase
    await page.getByText('Lowercase', { exact: true }).click();
    await page.getByText('Numbers', { exact: true }).click();
    await page.getByText('Symbols', { exact: true }).click();

    // click the 'copy password' button
    await page.getByText(' Copy password ').click();

    // close pop-up 
    await page.locator('button.lp-popup__top-close').click();

    // assign clipboard content
    const clipboard = await page.evaluate(() => navigator.clipboard.readText());

    // validate that clipboard text equals its uppercase equivalent
    expect(clipboard).toEqual(clipboard.toUpperCase());  
});

test('lowercase', async ({ page }) => {
    // uncheck all except lowercase
    await page.getByText('Uppercase', { exact: true }).click();
    await page.getByText('Numbers', { exact: true }).click();
    await page.getByText('Symbols', { exact: true }).click();

    // click the 'copy password' button
    await page.getByText(' Copy password ').click();

    // close pop-up 
    await page.locator('button.lp-popup__top-close').click();

    // assign clipboard content
    const clipboard = await page.evaluate(() => navigator.clipboard.readText());

    // validate that clipboard text equals its lowercase equivalent
    expect(clipboard).toEqual(clipboard.toLowerCase());  
});

test('numbers', async ({ page }) => {
    // uncheck all except numbers
    await page.getByText('Uppercase', { exact: true }).click();
    await page.getByText('Lowercase', { exact: true }).click();
    await page.getByText('Symbols', { exact: true }).click();

    // click the 'copy password' button
    await page.getByText(' Copy password ').click();

    // close pop-up 
    await page.locator('button.lp-popup__top-close').click();

    // assign clipboard content
    const clipboard = await page.evaluate(() => navigator.clipboard.readText());

    // validate that clipboard text contains only numbers
    expect(clipboard).toMatch(/^[0-9]+$/);
});

test('symbols', async ({ page }) => {
    // uncheck all except symbols
    await page.getByText('Uppercase', { exact: true }).click();
    await page.getByText('Lowercase', { exact: true }).click();
    await page.getByText('Numbers', { exact: true }).click();

    // click the 'copy password' button
    await page.getByText(' Copy password ').click();

    // close pop-up 
    await page.locator('button.lp-popup__top-close').click();

    // assign clipboard content
    const clipboard = await page.evaluate(() => navigator.clipboard.readText());

    // validate that clipboard text contains only symbols
    expect(clipboard).toMatch(/^[^\p{L}\p{N}\s]+$/u);
});