import { test } from '@playwright/test';
import { empleadosPage } from '../Pages/empleadosPage';
import { BasePage } from '../Pages/basePage';

test('Login para Orange', async ({ page }) => {

    const empleados = new empleadosPage(page);
    const base = new BasePage(page);

    await base.loadWeb('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await empleados.loginOrange();
    await empleados.confirmationLogin();
    await page.getByRole('link', { name: 'PIM' }).click();
    await page.getByRole('link', { name: 'Add Employee' }).click();
    await empleados.fillNewEmpleado();
    //await empleados.confirmationEmpleado();
    
});