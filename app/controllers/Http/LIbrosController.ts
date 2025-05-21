import pgDatabase from '../../database/pgDatabase.js'

class LibrosController {
  //mostrar todo de libros
  async obtenerLibros({ request, response }) {
    const result = await pgDatabase.query(`SELECT * FROM libros`)
    return response.json({ ms: result.rows })
  }

  //mostrar libro por id
  async obtenerLibrosId({ params, response }) {
    const { id } = params
    const result = await pgDatabase.query(`SELECT * FROM libros WHERE id = $1`, [id])
    return response.json({ ms: result.rows })
  }
  //insertar libros
  async insertarLibros({ request, response }) {
    const { titulo, autor, anio_publicacion, editorial_id } = request.body()
    const result = await pgDatabase.query(
      `INSERT INTO libros (titulo, autor, anio_publicacion, editorial_id) values ($1,$2,$3,$4)`,
      [titulo, autor, anio_publicacion, editorial_id]
    )
    return response.json({ ms: `Libro insertado` })
  }

  //actualizar LIbros por id
  async acrualizarLibro({ params, request, response }) {
    const id = params.id
    const { titulo, autor, anio_publicacion, editorial_id } = request.body()

    if (!titulo || autor) {
      return response.json({ ms: `falta un dato` })
    }
    if (anio_publicacion != Number) {
      return response.json({ ms: `falta el año` })
    }
    if (anio_publicacion < 999 || anio_publicacion > 9999) {
      return response.json({ md: `año no valido` })
    }
    const result = await pgDatabase.query(
      `UPDATE Libros SET titulo = $1, autor = $2, anio_publicacion = $3, editorial_id = $4 WHERE id = $5`,
      [titulo, autor, anio_publicacion, editorial_id]
    )
    if (result.rowsCount > 0) {
      return response.json({ ms: `Libro actualizado` })
    }
  }

  //eliminar libro
  async eliminarLibro({ params, response }) {
    const id = params.id
    const result = await pgDatabase.query(`DELETE FROM libros WHERE id = $1`, [id])
    return response.json({ ms: `libro eliminado` })
  }
}

export default LibrosController
