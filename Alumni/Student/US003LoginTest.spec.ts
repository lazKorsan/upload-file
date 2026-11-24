import { test, expect } from '@playwright/test';
import {StudentPage} from "../../src/main/main/pages/StudentPage";

test('US003lOGİN test tc01', async ({ page }) => {


    await page.goto(process.env.BASE_URL!);


    // loginMethod
    await expect(page.getByRole('link', { name: 'site logo' })).toBeVisible();

    await page.getByRole('link', { name: 'Login' }).click();
    await expect(page.getByRole('link', { name: 'site logo' })).toBeVisible();

    await page.getByRole('textbox', { name: 'Email:' }).click();
    await page.getByRole('textbox', { name: 'Email:' }).fill(process.env.STUDENT_MAIL!);
    await page.getByRole('textbox', { name: 'Password:' }).click();
    await page.getByRole('textbox', { name: 'Password:' }).fill(process.env.STUDENT_PASSWORD!);
    await page.getByRole('button', { name: 'Login' }).click();
});

test('US003lOGİN test tc02', async ({ page }) => {


    await page.goto(process.env.BASE_URL!);


    // loginMethod
    const studentPage= new StudentPage(page);
    const mail=process.env.STUDENT_MAIL!;
    const password=process.env.STUDENT_PASSWORD!;

    await studentPage.loginMethod(mail, password);

    await expect(page).toHaveURL(/panel/);


});

test('US023uPlOADfİLE test tc01', async ({ page }) => {


    await page.goto(process.env.BASE_URL!);


    // loginMethod
    const studentPage= new StudentPage(page);
    const mail=process.env.STUDENT_MAIL!;
    const password=process.env.STUDENT_PASSWORD!;

    await studentPage.loginMethod(mail, password);

    await expect(page).toHaveURL(/panel/);

    // BASİCıNFORMATİON

    await studentPage.upLoadFile();


});














