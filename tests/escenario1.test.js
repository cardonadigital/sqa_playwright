// tests/tests/escenario1.test.js
const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage');
const CategoriaPage = require('../pages/CategoriaPage');
const CarritoPage = require('../pages/CarritoPage');

test('Escenario 1: Seleccionar dos productos de la categoría amor y agregarlos al carrito', async ({ page }) => {
    const homePage = new HomePage(page);
    const categoriaPage = new CategoriaPage(page);
    const carritoPage = new CarritoPage(page);

    

    // Navigate explicitly, similar to entering a URL in the browser.
    await page.goto('https://www.floristeriamundoflor.com/');


    await homePage.clickCategoriaAmor();
    await categoriaPage.esperarTituloVisible();
    await categoriaPage.producto1();
    await carritoPage.volverHomePage();
    /* await carritoPage.esperarTituloVisible()
 */
    await homePage.clickCategoriaAmor();
    await categoriaPage.producto2();
    await carritoPage.esperarTituloVisible()
    console.log("2 productos agregado al carrito de 'Amor'.");


    // Obtener la cantidad de productos en el carrito
    const cantidadProductos = await carritoPage.obtenerCantidadDeProductos();
    console.log(`Cantidad de productos en el carrito: ${cantidadProductos}`);

    // Aserción: verificar que la cantidad de productos en el carrito sea igual a 2
    expect(cantidadProductos).toBe(2);  // Verifica que la cantidad de productos sea 2
});
