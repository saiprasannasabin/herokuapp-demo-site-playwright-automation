
export class DropDownPage {
  constructor(page){
    this.page = page;
  }

  async launchUrl(){
    await this.page.goto("/dropdown");
  }

  clickOnDropDown(){
    return this.page.locator("#dropdown");
  }

  async selectOption1(){
    await this.clickOnDropDown().selectOption("1");
  }

  async selectOption2(){
    await this.clickOnDropDown().selectOption("2");
  }

}