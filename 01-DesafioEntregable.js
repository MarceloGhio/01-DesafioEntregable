class ProductManager {
    constructor() {
        this.products = []; // Un arreglo vacío para almacenar los productos.
        this.productIdCounter = 1; // Un contador para generar IDs autoincrementables.
    }
    // Método para agregar un producto al arreglo de productos
    addProduct(product) {
        // Validamos que todos los campos obligatorios estén presentes en el producto.
        if (!product.titulo || !product.descripcion || !product.precio || !product.thumbnail || !product.stock) {
            throw new Error("Todos los campos son obligatorios.");
        }

        // Validamos que el campo 'code' no se repita.
        if (this.products.some((existingProduct) => existingProduct.code === product.code)) {
            throw new Error("El código del producto ya existe.");
        }

        // Asignamos un ID autoincrementable al producto y lo agregamos al arreglo.
        product.id = this.productIdCounter++;
        this.products.push(product);
    }

    // Método para obtener todos los productos
    getProducts() {
        // Devolvemos el arreglo completo de productos.
        return this.products;
    }
    // Método para buscar un producto por su ID
    getProductById(id) {
        // Buscamos el producto en el arreglo por su ID.
        const product = this.products.find((existingProduct) => existingProduct.id === id);

        if (!product) {
            console.error("Producto no encontrado.");
        }

        return product;
    }
}

// Ejemplo de uso de la clase ProductManager:
const productManager = new ProductManager();

// Agregar productos de ejemplo
productManager.addProduct({
    titulo: "Producto 1",
    descripcion: "Descripción del Producto 1",
    precio: 10.99,
    thumbnail: "imagen1.jpg",
    code: "P1",
    stock: 50,
});
productManager.addProduct({
    titulo: "Producto 2",
    descripcion: "Descripción del Producto 2",
    precio: 19.99,
    thumbnail: "imagen2.jpg",
    code: "P2",
    stock: 30,
});

console.log(productManager.getProducts()); // Devuelve un arreglo con los dos productos agregados.
console.log(productManager.getProductById(1)); // Devuelve el producto con ID 1.
console.log(productManager.getProductById(3)); // Muestra un mensaje de error "Producto no encontrado".
