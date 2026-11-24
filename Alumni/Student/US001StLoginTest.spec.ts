import { test, expect } from '@playwright/test';
import {LoggerHelper} from "../../src/main/main/utils/LoggerHelper";
import {ReusableMethods} from "../../src/main/main/utils/ReusableMethods";


test('US001StLoginTest TC01', async ({ page }) => {

    const url=process.env.BASE_URL!;

    await page.goto(url);
    LoggerHelper.logInfo(`Student kullanicisi "${url}" sayfasina gider`);


    await page.getByRole('link', { name: 'Login' }).click();
    LoggerHelper.logInfo('Student kullanicisi "Login" butona tiklar');


    const mail=process.env.STUDENT_MAIL!;
    await page.getByRole('textbox', { name: 'Email:' }).fill(mail);
    LoggerHelper.logInfo(`Student kullanicisi "Email:" kutusuna "${mail}" yazar`);


    const password=process.env.STUDENT_PASSWORD!;
    await page.getByRole('textbox', { name: 'Password:' }).fill(password);
    LoggerHelper.logInfo(`Student kullanicisi "Password" kutusuna "${password}" yazar`);


    await page.getByRole('button', { name: 'Login' }).click();
    LoggerHelper.logInfo('Student kullanicisi "Login Submit" butona tiklar ')


    const methods=new ReusableMethods(page);
    await methods.verifyUrl("panel");

});

