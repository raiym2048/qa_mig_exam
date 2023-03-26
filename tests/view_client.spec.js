const {test } = require('@playwright/test');


test('view client', async ({page}) => {
    await page.goto('http://167.114.201.175:5000/login')
    await page.locator('.login').fill('Admin')
    await page.locator('.password').fill('Admin@Navi')
    await page.locator('.auth-btn').click()



    try {

        await page.locator('#mat-input-0').fill('same_name')
        await page.keyboard.press('Enter')

        await page.click("text=same_name",{timeout: 5000})

    } catch (e) {
        console.log('error')
    }


    await page.waitForTimeout(500)
    await page.keyboard.press('Escape')

});