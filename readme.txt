PLAYWRIGHT DEMO

Playwright install -> npm init playwright@latest

Add the axe-core library to config: "npm install @axe-core/playwright"

Test headlessly: npx playwrite test
Test headed:     npx playwrite test --ui

Tests under /tests include checks for case, length, new password generation,
and visual assertions.

There is also a test for accessibility which fails due to existing ADA errors
on the page under test.