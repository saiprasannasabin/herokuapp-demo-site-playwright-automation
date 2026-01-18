
export class CheckBox {
    constructor(page){
        this.page = page;

    }

    async launchUrl(){
        await this.page.goto("/checkboxes");
    }

    checkBox1(){
       return this.page.locator("#checkboxes input").nth(0);
       
    }
    
    checkBox2(){
       return this.page.locator("#checkboxes input").nth(1); 
    }

    async checkCheckBox1(){
        await this.checkBox1().check();
    }

    async checkCheckBox2(){
        await this.checkBox2().check();
    }

    async unCheckCheckBox1(){
       await this.checkBox1().uncheck(); 
    }

     async unCheckCheckBox2(){
       await this.checkBox2().uncheck(); 
    }
}