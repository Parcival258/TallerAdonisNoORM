import router from "@adonisjs/core/services/router";
import LibrosController from "#controllers/Http/LIbrosController";

const Libro = new LibrosController();

//rutas libros

//obtener
router.get(`/obtenerLibros`, Libro.obtenerLibros)
//obtener por id
router.get(`/obtenerLIbrosId/:id`, Libro.obtenerLibrosId)
//insertar
router.post(`/insetarLibros`, Libro.insertarLibros)
//actualizar
router.put(`/actualizarLibro/:id`, Libro.acrualizarLibro)
//eliminar
router.delete(`/eliminarLibro/:id`, Libro.eliminarLibro)