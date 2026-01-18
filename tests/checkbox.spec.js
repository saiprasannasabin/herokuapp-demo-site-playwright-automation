import {test,expect} from "@playwright/test";
import { CheckBox } from "./pages/CheckBox";

test.describe('checkboxes validation', ()=>{
    let checkboxpage;
    test.beforeEach(async({page}) => {
    checkboxpage = new CheckBox(page);
    await checkboxpage.launchUrl();

    })
test('Check and uncheck the checkboxes', async({page}) =>{
    await checkboxpage.checkCheckBox1();
    await checkboxpage.checkCheckBox2();
    await expect((checkboxpage.checkBox1())).toBeChecked();
    await expect((checkboxpage.checkBox2())).toBeChecked();
    await checkboxpage.unCheckCheckBox1();
    await checkboxpage.unCheckCheckBox2();
    await expect((checkboxpage.checkBox1())).not.toBeChecked();
    await expect((checkboxpage.checkBox2())).not.toBeChecked();

})

    
})