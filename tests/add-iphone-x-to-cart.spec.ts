import { test, expect } from '@playwright/test';

test('login, add iPhone X to cart, and checkout', async ({ page }) => {
  // Navigate to login page
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

  // Fill in login credentials (using demo credentials from the site)
  await page.fill('#username', 'rahulshettyacademy');
  await page.fill('#password', 'Learning@830$3mK2');
  await page.click('#signInBtn');

  // Wait for navigation to shop page
  // await page.waitForURL('/.*angularpractice/shop');
  await page.waitForURL('**/angularpractice/shop');

  // Select iPhone X and add to cart
  const productCards = page.locator('.card.h-100');
  const count = await productCards.count();
  for (let i = 0; i < count; i++) {
    const title = await productCards.nth(i).locator('h4 a').textContent();
    if (title && title.includes('iphone X')) {
      await productCards.nth(i).locator('button').click();
      break;
    }
  }

  // Go to cart
  await page.click('a.nav-link.btn.btn-primary');

  // Assert iPhone X is in the cart
  const cartItem = page.locator('h4.media-heading');
  await expect(cartItem).toHaveText(/iphone X/i);

  // Checkout
  await page.click('button.btn.btn-success');

  // Confirm checkout page is shown on the summary
  // await expect(page.locator('h2')).toHaveText(/Checkout/i);
});
