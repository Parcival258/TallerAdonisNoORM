import router from "@adonisjs/core/services/router";
import EditorialesController from "#controllers/Http/EditorialesController";

const Editorial = new EditorialesController();

//rutas crud

//obtner
router.get(`/obtenerEditoriales`, Editorial.obtenerEditoriales)
//obtener por id
router.get(`/obtenerEditorialesId/:id`, Editorial.obtenerEditorialId)
//insertar
router.post(`/insertarEditoriales`, Editorial.insertarEditorial)
//actualizar
router.put(`/actualizarEditoriales/:id`, Editorial.actualizarEditorial)
//eliminar
router.delete(`/eliminarEditoriales/:`, Editorial.eliminarEditorial)