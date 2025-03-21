// tests/pages/CarritoPage.js
class CarritoPage {
    constructor(page) {
        this.page = page;
    }

    // Función para esperar que el elemento con el XPath sea visible
    async esperarTituloVisible() {
        const xpath = '//*[@id="main"]/header/h1';
        await this.page.locator(xpath).waitFor({ state: 'visible' });  // Esperar que el elemento esté visible
    }

    // Función para obtener la cantidad de elementos con el XPath
    async obtenerCantidadDeProductos() {
        const xpath = "//td[contains(@class, 'product-name')]";
        const elementos = await this.page.locator(xpath).count();  // Contar los elementos encontrados
        return elementos;
    }

    // Método para hacer clic en el primer elemento por XPath
    async volverHomePage() {
        const xpath1 = '//a[contains(text(), "Home")]';
        await this.page.locator(xpath1).click();  // Hacer clic en el primer elemento
    }
}

module.exports = CarritoPage;
