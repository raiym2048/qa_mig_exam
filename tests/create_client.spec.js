import {test} from "@playwright/test";


test('create user ', async ({page}) => {
    await page.goto('http://167.114.201.175:5000/login')
    await page.locator('.login').fill('Admin')
    await page.locator('.password').fill('Admin@Navi')
    await page.locator('.auth-btn').click()

    await page.locator('.clients-add-user-dialog').click()
    await page.locator('#mat-input-1').fill('same_name')
    await page.locator('#mat-input-2').fill('same_surname')


    await page.locator('#mat-input-3').fill('same_och')
    await page.locator('#mat-radio-2').click()


    await page.locator('#mat-input-4').fill('same.email@gmail.com')
    await page.locator('#mat-input-5').fill('123456798')


    await page.locator('#mat-input-6').fill('09.09.2009')
    await page.locator("[name=save]").click()
    await page.waitForTimeout(500)
});