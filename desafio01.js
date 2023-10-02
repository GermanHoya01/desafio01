

//creo la clase que gestione los productos
class ProductManager {
    constructor() {
        this.products = [];
        this.lastProductId = 0;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        // Validar que todos los campos sean obligatorios
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.error("Todos los campos son obligatorios");
            return;
        }

        // Validar que el campo "code" no esté repetido
        const isCodeUnique = !this.products.some(product => product.code === code);
        if (!isCodeUnique) {
            console.error("El código ya existe en la lista de productos");
            return;
        }

        // Incrementar el ID 
        this.lastProductId += 1;

        // Agregar el producto al arreglo de productos
        this.products.push({
            id: this.lastProductId,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        });

        console.log("Producto agregado", {
            id: this.lastProductId,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        });
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(product => product.id === id);
        if (product) {
            return product;
        } else {
            console.error("Producto no encontrado");
        }
    }
}

// Ejemplo de uso:
const productManager = new ProductManager();

productManager.addProduct("Producto 1", "Descripción 1", 19.99, "imagen1.jpg", "01", 10);
productManager.addProduct("Producto 2", "Descripción 2", 29.99, "imagen2.jpg", "00", 15);

console.log("Lista de productos", productManager.getProducts());

const product = productManager.getProductById(1);
if (product) {
    console.log("Producto encontrado", product);
}
