class HomePage {
    constructor(page) {
        this.page = page;  // Aquí se recibe el objeto page
    }

    // Método para hacer clic en el botón "Amor" usando el XPath
    async clickCategoriaAmor() {
        await this.page.locator('//*[@id="menu-item-2806"]/a').click();  // Seleccionar y hacer clic en el botón con el XPath
    }


    
    
}

module.exports = HomePage;
