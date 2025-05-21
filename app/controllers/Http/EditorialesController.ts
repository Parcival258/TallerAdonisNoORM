import pgDatabase from '../../database/pgDatabase.js'

//CRUD editoriales

class EditorialesController {
  //mostrar todas las editoriales
  async obtenerEditoriales({ response }: { response: any }) {
    const result = await pgDatabase.query(`SELECT * FROM editoriales`)
    console.log(result.rows)
    return response.json({ ms: result.rows })
  }

  //mostrar editorial por id
  async obtenerEditorialId({ params, request, response }: { params: any; request: any; response: any }) {
    const id = params.id
    const result = await pgDatabase.query(`SELECT * FROM editoriales WHERE id = $1`, [id])
    console.log(result.rows)
    return response.json({ ms: result.rows })
  }

  //insertar editoriales
  async insertarEditorial({ request, response }: { request: any; response: any }) {
    const { nombre, pais } = request.body()
    const result = await pgDatabase.query(
      `INSERT INTO editoriales (nombre, pais) values ($1, $2)`,
      [nombre, pais]
    )
    return response.json({ ms: `editorial añadida` })
  }

  //actualizar editorial por id
  async actualizarEditorial({ params, request, response }: { params: any; request: any; response: any }) {
    const id = params.id
    const { nombre, pais } = request.body()

    if (!nombre) {
      return response.json({ ms: `lata nombre` })
    }
    if (!pais) {
      return response.json({ ms: `falta pais` })
    }
    const result = await pgDatabase.query(
      `UPDATE editoriales SET nombre = $1, pais = $2 WHERE id = $4`,
      [nombre, pais, id]
    )
    if ((result.rowCount ?? 0) > 0) {
      return response.json({ ms: `editorial actualizada` })
    }
  }

  //eliminar editorial por id
  async eliminarEditorial({ params, response }: { params: any; response: any }) {
    const id = params.id
    const result = await pgDatabase.query(`DELETE FROM editoriales WHERE id = $1`, [id])
    return response.json({ ms: `editorial eliminada` })
  }
}

export default EditorialesController
