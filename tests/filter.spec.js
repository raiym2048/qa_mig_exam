const {test} = require('@playwright/test');


test('filter', async ({page}) => {
    await page.goto('http://167.114.201.175:5000/login')
    await page.locator('.login').fill('Admin')
    await page.locator('.password').fill('Admin@Navi')
    await page.locator('.auth-btn').click()


    await page.locator('[placeholder="Все пользователи"]').click()
    await page.waitForTimeout(500)

    await page.locator('text=Проф. область').click()
    await page.waitForTimeout(500)
    await page.locator('.mat-checkbox-inner-container').nth(26).click()
    await page.waitForTimeout(500)
    await page.click('text=Искать')
    await page.waitForTimeout(500)
    await page.locator('[placeholder="Все пользователи"]').click()
    await page.waitForTimeout(500)
    await page.click('text=Сбросить фильтр')
    await page.waitForTimeout(500)
});