import {test, expect, } from '@playwright/test';

//login with valid credentials, check the heading is visible, then logout
test('successful login', async ({ page })=>{
    await page.goto("https://the-internet.herokuapp.com/login");

    await page.locator("#username").fill("tomsimth");
    await page.locator("#password").fill("SuperSecretPassword!");

    await page.getByRole('button', {name: 'Login'}).click();

    //await expect(page).toHaveTitle("The Internet");
    await expect(page.getByRole('heading', {name: " Secure Area"})).toBeVisible();

    await page.getByRole("link", {name: "Logout"}).click();

    await expect(page.getByRole("heading", {name: "Login Page"})).toBeVisible();

});

//invalid username 
test('invalid username', async ({ page })=>{
    await page.goto("https://the-internet.herokuapp.com/login");

    await page.locator("#username").fill("hello");
    await page.locator("#password").fill("SuperSecretPassword!");

    await page.getByRole("button", {name: "Login"}).click();

    let errorMessage = await page.locator("#flash");
    // console.log(errorMessage);
    await expect(errorMessage).toBeVisible();

});

//invalid password 
test('invalid password', async ({ page })=>{
    await page.goto("https://the-internet.herokuapp.com/login");

    await page.locator("#username").fill("tomsmith");
    await page.locator("#password").fill("tompassword!");

    await page.getByRole("button", {name: "Login"}).click();

    let errorMessage = await page.locator("#flash");
    // console.log(errorMessage);
    await expect(errorMessage).toBeVisible();

});