import {test,expect} from "@playwright/test";
import {Alerts} from "./pages/Alerts";

test.describe('alerts scenario' , ()=>{
    let alerts;
    test.beforeEach(async({page})=>{
        alerts = new Alerts(page);
        await alerts.launchUrl();
    })

test('clickonJsAlert',async({page})=>{
    page.once("dialog",async(dialog)=>{
        console.log(dialog.message());
        await dialog.accept();
    });
    await alerts.clickOnJsAlert();
    await expect(alerts.resultText()).toHaveText("You successfully clicked an alert");
    const resultMsg = await alerts.resultText().textContent();
    console.log(resultMsg);
})

test('clickforJSConfirm-OK', async({page})=>{
    page.once("dialog",async(dialog)=>{
        console.log(dialog.message());
        await dialog.accept();
    });
    await alerts.clickOnJSConfirm();
    await expect(alerts.resultText()).toHaveText("You clicked: Ok");
    const resultMsg = await alerts.resultText().textContent();
    console.log(resultMsg);
})

test('clickforJSConfirm-Cancel', async({page})=>{
    page.once("dialog",async(dialog)=>{
        console.log(dialog.message());
        await dialog.dismiss();
    });
    await alerts.clickOnJSConfirm();
    await expect(alerts.resultText()).toHaveText("You clicked: Cancel");
    const resultMsg = await alerts.resultText().textContent();
    console.log(resultMsg);
})

test('clickforJSprompt-ok', async({page})=>{
    page.once("dialog",async(dialog)=>{
        //console.log(dialog.message());
        await dialog.accept("testing");
    });
    await alerts.clickOnJsPrompt();
    await expect(alerts.resultText()).toHaveText("You entered: testing");
    const resultMsg = await alerts.resultText().textContent();
    console.log(resultMsg);
})

test('clickforJSprompt-cancel', async({page})=>{
    page.once("dialog",async(dialog)=>{
        //console.log(dialog.message());
        await dialog.dismiss();
    });
    await alerts.clickOnJsPrompt();
    await expect(alerts.resultText()).toHaveText("You entered: null");
    const resultMsg = await alerts.resultText().textContent();
    console.log(resultMsg);
})

})
