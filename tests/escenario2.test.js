// tests/tests/escenario2.test.js
const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage');
const CategoriaPage = require('../pages/CategoriaPage');
const CarritoPage = require('../pages/CarritoPage');

test('Escenario 2: Seleccionar un producto de la categoría cumpleaños, agregarlo y eliminarlo del carrito', async ({ page }) => {
    const homePage = new HomePage(page);
    const categoriaPage = new CategoriaPage(page);
    const carritoPage = new CarritoPage(page);

    // Navegar a la categoría "Cumpleaños"
    await homePage.goToCategoria('Cumpleaños');

    // Seleccionar el producto y agregarlo al carrito
    await categoriaPage.seleccionarProducto('Cumpleaños', '.producto-cumpleanos-1');
    await categoriaPage.agregarAlCarrito();
    console.log("Producto de cumpleaños agregado al carrito.");

    // Ir al carrito y eliminar el producto
    await page.click('button.ir-al-carrito');
    await carritoPage.eliminarProductoCumpleanos();
    console.log("Producto de cumpleaños eliminado del carrito.");
});
