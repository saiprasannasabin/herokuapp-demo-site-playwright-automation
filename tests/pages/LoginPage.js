import { expect} from "@playwright/test";

export class LoginPage {
  constructor(page){
    this.page = page;
    this.usernameInput = "#username" ;
    this.passwordInput = "#password" ;
  }
async launchUrl(){
   await this.page.goto("/login");
}
  
  async validateTheHeading(){
    return this.page.locator("h2");
  }

   validatePoweredByText(){
    return this.page.locator("text=Powered by Elemental Selenium");
  }

  async clickOnElementalSelenimLink(){
   await this.page.getByRole('link', {name: /Elemental Selenium/i}).click();
  }

  async enterUsernameAndPassword(username,password){
    await this.page.locator(this.usernameInput).fill(username);
    await this.page.locator(this.passwordInput).fill(password);
  }

  async clickOnLoginButton(){
    await this.page.getByRole('button', {name: /Login/i}).click();
  }

  async validateTextOnLoginPage(){
    return this.page.locator("h4");
  }

 async getErrorMsg(){
  return this.page.locator("#flash");
}
 async login(username,password){
  await this.enterUsernameAndPassword(username,password);
  await this.clickOnLoginButton();
}



}