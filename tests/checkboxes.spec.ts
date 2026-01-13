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

    const checkbox1 = page.locator('(//input[@type="checkbox"])[1]');
    if (!(await checkbox1.isChecked())) {
      await checkbox1.check();
    }
    await checkbox1.check();
    await expect(checkbox1).toBeChecked();
});

test("uncheck a checked checkbox", async ({page}) => {
    await page.goto("https://the-internet.herokuapp.com/checkboxes");

    const checkbox2 = page.locator('(//input[@type="checkbox"])[2]');

    checkbox2.uncheck();

    await expect(checkbox2).not.toBeChecked();
});