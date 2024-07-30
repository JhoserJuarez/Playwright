import { BasePage } from "./basePage";
import { EmpleadosLocators } from "./locators/empleados";
import{Page, Locator} from '@playwright/test'


export class empleadosPage extends BasePage{
    private readonly username: Locator;
    private readonly password: Locator;
    private readonly loginButton: Locator;
    private readonly loginMessageTrue: Locator;
    private readonly photo: Locator;
    private readonly firtsName: Locator;
    private readonly middleName: Locator;
    private readonly lastName: Locator;
    private readonly code: Locator;
    private readonly activeDetail: Locator;
    private readonly newUsername: Locator;
    private readonly newPassword: Locator;
    private readonly newPasswordConfirmation: Locator;
    private readonly saveEmpleado: Locator;
    private readonly empleadoMessageTrue: Locator;

    constructor(page:Page){
        super(page);
        this.username = page.locator(EmpleadosLocators.username);
        this.password = page.locator(EmpleadosLocators.password);
        this.loginButton = page.locator(EmpleadosLocators.loginButton);
        this.loginMessageTrue = page.locator(EmpleadosLocators.loginMessageTrue);
        this.photo = page.locator(EmpleadosLocators.photo);
        this.firtsName = page.locator(EmpleadosLocators.firtsName);
        this.middleName = page.locator(EmpleadosLocators.middleName);
        this.lastName = page.locator(EmpleadosLocators.lastName);
        this.code = page.locator(EmpleadosLocators.code);
        this.activeDetail = page.locator(EmpleadosLocators.activeDetail);
        this.newUsername = page.locator(EmpleadosLocators.newUsername);
        this.newPassword = page.locator(EmpleadosLocators.newPassword);
        this.newPasswordConfirmation = page.locator(EmpleadosLocators.newPasswordConfirmation);
        this.saveEmpleado = page.locator(EmpleadosLocators.saveEmpleado);
        this.empleadoMessageTrue = page.locator(EmpleadosLocators.empleadoMessageTrue);
    }

    async loginOrange(){
        await this.fillField(EmpleadosLocators.username,"Admin");
        await this.fillField(EmpleadosLocators.password,"admin123");
        await this.clickOn(EmpleadosLocators.loginButton);
    }

    async fillNewEmpleado(){
        await this.setInputFile(EmpleadosLocators.photo,"userjuarez.png")
        await this.fillField(EmpleadosLocators.firtsName,"Jhoser");
        await this.fillField(EmpleadosLocators.middleName,"Eduardo");
        await this.fillField(EmpleadosLocators.lastName,"Juarez");
        await this.fillField(EmpleadosLocators.code,"132435432");
        await this.clickOn(EmpleadosLocators.activeDetail);
        await this.fillField(EmpleadosLocators.newUsername,"jhosjuamir8");
        await this.fillField(EmpleadosLocators.newPassword,"Edu123");
        await this.fillField(EmpleadosLocators.newPasswordConfirmation,"Edu123");
        await this.clickOn(EmpleadosLocators.saveEmpleado);
    }

    async confirmationLogin(){
        await this.toBeVisible(EmpleadosLocators.loginMessageTrue);
    }

    async confirmationEmpleado(){
        await this.toBeVisible(EmpleadosLocators.empleadoMessageTrue);
    }
}