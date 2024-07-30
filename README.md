# Playwright
# Guía de Instalación y Uso
## Prerrequisitos
* Se debe tener instalado Node.js y  npm.
## Instalación
* Clonar el repositorio:
* Instalar dependencias:
# Ejecución
*  **Ejecutar pruebas sin interfaz:**  ***npx playwright test***, esta opción ejecutará las pruebas de forma headless, sin abrir una ventana del navegador.
*  **Ejecutar pruebas con interfaz gráfica:** ***npx playwright test --headed***, esta opción abrirá una ventana del navegador Chromium para visualizar la ejecución de las pruebas.
* **Ejecutar pruebas con interfaz de usuario:** ***npx playwright test --ui***, esta opción te proporcionará una interfaz gráfica más detallada para interactuar con las pruebas y depurarlas.

## Consideraciones
* **Navegador:** Actualmente, el proyecto solo está configurado para ejecutarse en el navegador Chromium.
* **Navegadores deshabilitados:** Se ha deshabilitado la ejecución en Firefox y en el navegador por defecto de Playwright.