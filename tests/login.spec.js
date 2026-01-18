import {test,expect}  from "@playwright/test";
import { LoginPage } from "./pages/LoginPage";
import loginData from "./test-data/loginData.json";
test.describe('Login Scenarios' , () => {
     let loginpage ;
     test.beforeEach(async ({page}) => {
     loginpage = new LoginPage(page);
     await loginpage.launchUrl();
     });

     test('Validate the UI',async({page}) =>{
     await expect(page).toHaveTitle("The Internet");
     const heading =await loginpage.validateTheHeading();
     await expect(heading).toBeVisible();
     const textOnLoginPage = await loginpage.validateTextOnLoginPage();
     await expect(textOnLoginPage).toHaveText("This is where you can log into the secure area. Enter tomsmith for the username and SuperSecretPassword! for the password. If the information is wrong you should see error messages.");
     const poweredBy = loginpage.validatePoweredByText();
     await expect(poweredBy).toBeVisible();
     await expect(poweredBy).toHaveText("Powered by Elemental Selenium");
     console.log(await poweredBy.textContent());
    });

    test('successfully login', async() =>{ 
    await loginpage.login(loginData.validUser.username,loginData.validUser.password);
    }); 

    test('Invalid login', async()=>{
    await loginpage.login(loginData.invalidUser.username,loginData.invalidUser.password);
    const errorLocator = await loginpage.getErrorMsg();
    const errorMsg = await errorLocator.textContent();
    console.log("Error Message:", errorMsg);
    await expect(errorLocator).toContainText("Your username is invalid!");
});
    test('empty login', async() =>{ 
    await loginpage.login(loginData.emptyUser.username,loginData.emptyUser.password);
    const errorLocator = await loginpage.getErrorMsg();
    const errorMsg = await errorLocator.textContent();
    console.log("Error Message:", errorMsg);
    await expect(errorLocator).toContainText("Your username is invalid!");
    }); 

});


