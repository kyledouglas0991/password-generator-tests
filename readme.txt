PLAYWRIGHT DEMO

Playwright install -> npm init playwright@latest

Add axe-core as a project dependency for ADA testing: "npm install @axe-core/playwright"

Test headlessly: npx playwrite test
Test headed:     npx playwrite test --ui

Tests under /tests include checks for case, length, new password generation,
and visual assertions.

There is also a test for accessibility which fails due to existing ADA errors
on the page under test.