import {test, expect} from "@playwright/test";

test('select option from dropdown by value', async ({page}) => {
    await page.goto("https://the-internet.herokuapp.com/dropdown");
    const dropdown = await page.locator("#dropdown");
    await dropdown.selectOption({value: "1"});
    await expect(dropdown).toHaveValue("1");
});

test('select option from dropdown by label', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/dropdown');
    const dropdown = await page.locator('#dropdown');
    await dropdown.selectOption({label: "Option 2"});
    await expect(dropdown).toHaveValue("2");
});