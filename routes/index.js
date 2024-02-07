const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');
const productoController = require('../controllers/productoController')

module.exports = function(){
    //agrega nuevos clientes via POST
    router.post('/clientes', clienteController.nuevoCliente);

    //obtener todos los clientes
    router.get('/clientes', clienteController.mostrarClientes)

    //muestra un cliente en especifico (ID)
    router.get('/clientes/:idCliente', clienteController.mostrarCliente)

    //actualizar cliente
    router.put('/clientes/:idCliente', clienteController.actualizarCliente)

    //eliminar cliente
    router.delete('/cliente/:idCliente', clienteController.eliminarCliente)

    /** PRODUCTOS */
    //nuevos productos
    router.post('/productos', 
        productoController.subirArchivo,
        productoController.nuevoProducto
    );

    //muestra todos los productos
    router.get('/productos', productoController.mostrarProductos)

    //muestra un producto por su id
    router.get('/productos/:idProducto', productoController.mostrarProducto)

    //actualizar productos
    router.put('/productos/:idProducto', 
        productoController.subirArchivo,
        productoController.actualizarProducto
    )

    //eliminar productos
    router.delete('/productos/:idProducto', productoController.eliminarProducto)
    return router;
}