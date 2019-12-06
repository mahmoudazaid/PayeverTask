const { Builder, By, Key, until } = require('selenium-webdriver');
const { expect } = require('chai');

describe('Test login', () => {
    const driver = new Builder().forBrowser('chrome').build();

    it('should go to nehalist.io and check the title', async () => {
        await driver.get('https://commerceos.staging.devpayever.com');
        await driver.sleep(20000);
        await driver.findElement(By.name('UserName')).sendKeys('aqa@payever.org');
        await driver.findElement(By.xpath("//input[@placeholder='password']")).sendKeys('Aqacool123!');
        await driver.findElement(By.xpath("//button[@type='submit']")).click();
        await driver.findElement(By.xpath("//span[contains(text(),'Apps')]")).click();
        await driver.findElement(By.xpath("//div[@data-pe-app='shop']")).click();
        await driver.findElement(By.xpath("//span[contains(text(),'Themes')]")).click();
        await driver.findElement(By.xpath("//*[text()=' + Add Theme ']")).click();
        await driver.findElement(By.xpath("//img[@src='assets/ui-kit/icons-png/icon-b-text-colored-64.png']")).click();

        expect(title).to.equal('nehalist.io');
    });

    after(async () => driver.quit());
});