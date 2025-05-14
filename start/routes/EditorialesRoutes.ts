import router from "@adonisjs/core/services/router";
import EditorialesController from "#controllers/Http/EditorialesController";

const Editorial = new EditorialesController();

//rutas

//obtner
router.get(`/obtenerEditoriales`, Editorial.obtenerEditoriales)
//obtener por id
router.get(`/obtenerEditorialId/:id`, Editorial.obtenerEditorialId)
//insertar
router.post(`/insertarEditorial`, Editorial.insertarEditorial)
//actualizar
router.put(`/actualizarEditorial/:id`, Editorial.actualizarEditorial)
//eliminar
router.delete(`/eliminarEditorial/:`, Editorial.eliminarEditorial)