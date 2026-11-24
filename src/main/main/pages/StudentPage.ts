import {BasePage} from "./BasePage";
import {expect, Locator, Page} from "@playwright/test";
import {LoggerHelper} from "../utils/LoggerHelper";
import path from "node:path";


export class StudentPage extends BasePage {
    private elementMap: Record<string, Locator>;

    constructor(page: Page) {
        super(page);

        // Tek yer: Map. Field'lar yok!
        this.elementMap = {
            'login': page.getByRole('link', {name: 'Login'}),
            'register': page.locator('a[href="/register"]'),
            'email': page.getByRole('textbox', {name: 'Email:'}),
            'password': page.getByRole('textbox', {name: 'Password:'}),
            'login submit': page.getByRole('button', {name: 'Login'}),

        };
    }

    getElementByName(elementName: string): Locator {
        if (!elementName || !elementName.trim()) {
            throw new Error(`[HATA] Element adı boş olamaz! Geçerli değerler: ${Object.keys(this.elementMap).join(', ')}`);
        }

        const key = elementName.trim().replace(/:+$/, '').toLowerCase();
        const locator = this.elementMap[key];

        if (!locator) {
            throw new Error(
                `[HATA] '${elementName}' StudentPage içinde bulunamadı! ` +
                `Geçerli değerler: ${Object.keys(this.elementMap).join(', ')}`
            );
        }
        return locator;
    }

    async loginWithMwthod(mail: string, password: string): Promise<void> {

        const page = this.page;


        await page.getByRole('link', {name: 'Login'}).click();


        await page.getByRole('textbox', {name: 'Email:'}).fill(mail);

        await page.getByRole('textbox', {name: 'Password:'}).fill(password);

        await page.getByRole('button', {name: 'Login'}).click();


    }

    async loginMethod(mail: string, password: string): Promise<void> {

        const page = this.page;


        await expect(page.getByRole('link', {name: 'site logo'})).toBeVisible();

        await page.getByRole('link', {name: 'Login'}).click();
        await expect(page.getByRole('link', {name: 'site logo'})).toBeVisible();

        await page.getByRole('textbox', {name: 'Email:'}).click();
        await page.getByRole('textbox', {name: 'Email:'}).fill(mail);
        await page.getByRole('textbox', {name: 'Password:'}).click();
        await page.getByRole('textbox', {name: 'Password:'}).fill(password);
        await page.getByRole('button', {name: 'Login'}).click();


    }

    async upLoadFile(): Promise<void> {


        const page = this.page;
        await page.getByRole('button', { name: 'Courses' }).click();
        await page.getByRole('link', { name: 'New' }).click();
        await page.locator('select[name="type"]').selectOption('course');


        await page.getByRole('textbox', { name: '- 160 characters preferred' }).fill('seoBox');
        await page.locator('.input-group-text').first().click();
        const page1Promise = page.waitForEvent('popup');
        await page.locator('.input-group-text').first().click();
        const page1 = await page1Promise;
        await page1.locator('.fab-button.fab-toggle').click();
        await page1.locator('#upload').click();
        await expect(page1.getByRole('dialog', { name: 'Upload File(s)' })).toBeVisible();
        await page1.getByText('Choose File(s)').click();
        await page1.locator('input[type="file"]').setInputFiles('C:\\Users\\user\\WebstormProjects\\afraim\\Documents\\assests\\math1.png');

        await page1.locator('#uploadModal').getByText('Close').click();
        await page1.locator('a').filter({ hasText: 'math1.png' }).click();
        await page1.locator('#actions').getByText('Confirm').click();
        const page2Promise = page.waitForEvent('popup');
        await page.locator('div:nth-child(6) > .input-group > .input-group-prepend > .input-group-text').dblclick();
        const page2 = await page2Promise;
        await page2.locator('.fab-button.fab-toggle').click();
        await page2.locator('#upload').click();
        await expect(page2.getByRole('dialog', { name: 'Upload File(s)' })).toBeVisible();
        await page2.getByText('Choose File(s)').click();
        await page2.locator('input[type="file"]').setInputFiles('C:\\Users\\user\\WebstormProjects\\afraim\\Documents\\assests\\math2.png');
        await expect(page2.getByRole('img', { name: 'math2.png' })).toBeVisible();
        await page2.locator('#uploadModal').getByText('Close').click();
        await page2.locator('a').filter({ hasText: 'math2.png' }).click();
        await page2.locator('#actions').getByText('Confirm').click();
        await page.getByText('Minimum 300 words. HTML and').click();
        await page.getByRole('textbox').nth(5).fill('yukleme tamam');
        await page.getByRole('button', { name: 'Next' }).click();






    }


}