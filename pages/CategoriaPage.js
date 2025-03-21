// tests/pages/CategoriaPage.js
class CategoriaPage {
    constructor(page) {
        this.page = page;
    }

    // Función para esperar que el elemento con el XPath sea visible
    async esperarTituloVisible() {
        const xpath = '//*[@id="content"]/h1';
        await this.page.locator(xpath).waitFor({ state: 'visible' });  // Esperar que el elemento esté visible
    }

    // Método para hacer clic en el primer elemento por XPath
    async producto1() {
        const xpath1 = '//*[@id="content"]/div[2]/div/div[1]/div/div[1]/figure/div/div[1]/a/span';
        const xpath2 = '//*[@id="content"]/div[2]/div/div[1]/div'
        await this.page.locator(xpath2).hover();
        await this.page.locator(xpath1).click();  // Hacer clic en el primer elemento
    }



    // Método para hacer clic en el segundo elemento por XPath
    async producto2() {
        const xpath1 = '//*[@id="content"]/div[2]/div/div[2]/div/div[1]/figure/div/div[1]/a/span';
        const xpath2 = '//*[@id="content"]/div[2]/div/div[2]/div'
        await this.page.locator(xpath2).hover();
        await this.page.locator(xpath1).click();  // Hacer clic en el segundo elemento
    }
}

module.exports = CategoriaPage;
