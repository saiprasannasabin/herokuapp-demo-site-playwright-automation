
export class Alerts {
    constructor(page){
        this.page = page;
    }

async launchUrl(){
    await this.page.goto("/javascript_alerts");
}

 JsAlertButton(){
return this.page.getByRole("button", {name:/Click for JS Alert/i});
}

async clickOnJsAlert(){
    await this.JsAlertButton().click();
}


 clickForJSConfirm(){
return  this.page.getByRole("button", {name:/Click for JS Confirm/i});
}

async clickOnJSConfirm(){
    await this.clickForJSConfirm().click();
}

clickForJSPrompt(){
return  this.page.getByRole("button", {name:/Click for JS Prompt/i});
}

async clickOnJsPrompt(){
    await this.clickForJSPrompt ().click();
}

resultText() {
    return this.page.locator("#result");
  }
}