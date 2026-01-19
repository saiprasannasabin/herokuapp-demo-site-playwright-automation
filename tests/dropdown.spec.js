import {test,expect} from "@playwright/test";
import { DropDownPage} from "./DropDownPage";

test.describe('Dropdown scenarios', ()=>{
    let dropdownpage;
test.beforeEach(async({page})=>{
    dropdownpage = new DropDownPage(page)   
    await dropdownpage.launchUrl();
})
test('select dropdownoption1', async()=>{
 await dropdownpage.selectOption1();
 await expect(dropdownpage.clickOnDropDown()).toHaveValue("1");
})

test('select dropdownoption2', async()=>{
 await dropdownpage.selectOption2();
 await expect(dropdownpage.clickOnDropDown()).toHaveValue("2");
})
});