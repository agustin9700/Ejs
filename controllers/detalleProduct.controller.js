module.exports = function (req, res) {
    const infoProduct = [
    {
        id: 1,
        nombre: "Carpaccio Fresco",
        detalle: "Entrada Carpaccio de salmón con cítricos",
        precio: 1000,
        imagen: "/images/Carpaccio-de-salmon.jpg"  
    },
    {
        id: 2,
        nombre: "Risotto de Berenjena",
        detalle: "Risotto de berenjena y queso de cabra",
        precio: 2000,
        imagen: "/images/Risotto-berenjena-queso-cabra.jpg"  
    },
    {
        id: 3,
        nombre: "Mousse de Arroz",
        detalle: "Mousse de arroz con leche y aroma de azahar",
        precio: 3000,
        imagen: "/images/Mousse-de-arroz-con-leche.jpg"  
    },
    {
        id: 4,
        nombre: "Espárragos Blancos",
        detalle: "Espárragos blancos con vinagreta de verduras y jamón ibérico",
        precio: 4000,
        imagen: "/images/esparragos.jpg"  
    }
];
    const idMenu = req.params.id;
    const productoSeleccionado = infoProduct.find(function (producto) {
        return producto.id === parseInt(idMenu);
    });

    // Pasa los datos del producto seleccionado a la vista
    res.render("detalleMenu", { "productoSeleccionado": productoSeleccionado });
};
