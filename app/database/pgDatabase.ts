import { Client } from 'pg'

//estancia para la conexión

const pgDatabase = new Client({
  host: `localhost`,
  port: 5433,
  user: `postgres`,
  password: `L@sso09111998`,
  database: `Libros`,
})
pgDatabase.connect()

export default pgDatabase
