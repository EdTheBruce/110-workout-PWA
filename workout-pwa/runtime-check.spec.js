const { test } = require('@playwright/test');

test('captures browser errors', async ({ page }) => {
  const errors = [];
  page.on('pageerror', err => errors.push('PAGE_ERROR: ' + err.message));
  page.on('console', msg => {
    if (msg.type() === 'error' || msg.type() === 'warning') {
      errors.push('CONSOLE_' + msg.type().toUpperCase() + ': ' + msg.text());
    }
  });

  await page.goto('http://localhost:8080');
  await page.waitForTimeout(1500);
  console.log(JSON.stringify(errors));
  console.log('TITLE=' + await page.title());
});
