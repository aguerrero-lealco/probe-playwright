import { test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { DashboardPage } from '../pages/dashboard.page';

test("Autenticación exitosa", async ({page}) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page)
  await page.goto('https://qa360.leal.co/login');

  await loginPage.insertUsername("hoyosadm");
  await loginPage.insertPassword("874417!1664");
  await loginPage.clickOnButton();
  await page.waitForTimeout(20000);
  await dashboardPage.checkIamDashboard();
 // await page.waitForTimeout(5000);
})

/*test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});*/
