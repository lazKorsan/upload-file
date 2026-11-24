import {Given} from "@cucumber/cucumber";
import {StudentPage} from "../../main/main/pages/StudentPage";
import {ReusableMethods} from "../../main/main/utils/ReusableMethods";
import {LoggerHelper} from "../../main/main/utils/LoggerHelper";



Given('Student kullanicisi {string} sayfasina gider', async function (baseUrlKey: string) {

    const url=process.env[baseUrlKey]!;
    await this.page.goto(url);
    LoggerHelper.logInfo(`Student kullanicisi ${url} sayfasina gider`);

});


Given('Student kullanicisi {string} ve {string} degerleri ile siteye giris yapar', async function (mailKey: string, passwordKey: string) {


    const studentPage=new StudentPage(this.page);
    await studentPage.loginWithMwthod(process.env[mailKey]!, process.env[passwordKey]!);



});


Given('Student kullanicisi {string} sayfasinda oldugunu dogrular', async function (expectedUrl: string) {
    LoggerHelper.logInfo(`Student kullanicisi "${expectedUrl}" sayfasinda oldugunu dogrular`);

    const methods=new ReusableMethods(this.page);
    await methods.verifyUrl(expectedUrl);
    LoggerHelper.logInfo(`Student kullanicisi  ${expectedUrl} sayfasinda oldugunu dogrular`);


});
