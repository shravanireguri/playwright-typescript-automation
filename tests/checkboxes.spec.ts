import {test, expect} from "@playwright/test";

test("check checkboxes state", async({page}) => {
    await page.goto("https://the-internet.herokuapp.com/checkboxes");

    let status_checkbox1 = await page.locator('(//input[@type="checkbox"])[1]').isChecked();
    let status_checkbox2 = await page.locator('(//input[@type="checkbox"])[2]').isChecked();

    console.log("checkbox1: ", status_checkbox1);
    console.log("checkbox2: ", status_checkbox2);
});

test("check an unchecked checkbox", async({page}) => {
    await page.goto("https://the-internet.herokuapp.com/checkboxes");

    let checkbox1 = await page.locator('(//input[@type="checkbox"])[1]');
    let checkbox2 = await page.locator('(//input[@type="checkbox"])[2]');

    if(!(checkbox1.isChecked())){
        await checkbox1.check();
    }

    await expect(checkbox1).toBeChecked();

    await page.waitForTimeout(2000);
});