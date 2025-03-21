// tests/tests/escenario1.test.js
const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage');
const CategoriaPage = require('../pages/CategoriaPage');
const CarritoPage = require('../pages/CarritoPage');

test('Escenario 2: Seleccionar 1 producto cumpleanos agregarlo al carrito y luego eliminarlo del carrito', async ({ page }) => {
    const homePage = new HomePage(page);
    const categoriaPage = new CategoriaPage(page);
    const carritoPage = new CarritoPage(page);

    

    // Navigate explicitly, similar to entering a URL in the browser.
    await page.goto('https://www.floristeriamundoflor.com/');


    await homePage.clickCategoriaCumple();
    await categoriaPage.esperarTituloVisible();
    await categoriaPage.producto1();
    await carritoPage.eliminarProducto1();


    // Obtener la cantidad de productos en el carrito
    const cantidadProductos = await carritoPage.obtenerCantidadDeProductos();
    console.log(`Cantidad de productos en el carrito: ${cantidadProductos}`);

    // Aserción: que contenga el siguiente texto: Tu carrito está vacío.
    await expect(page.locator('//*[@id="main"]/div/div/div/div/div[2]/div/div/div/div[1]/div[2]')).toContainText('Tu carrito est');
});
