import { gql } from "@apollo/client"
import { useLazyQuery } from "@apollo/client/react"
import { useState } from "react"

export function ContenedorEstudiantes() {
  const [fields, setFields] = useState({
    nombre: false,
    carrera: false,
    facultad: false,
    edad: false,
    correo: false
  })

  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.checked })
  }

  const buildQuery = () => {
    const selected = Object.keys(fields).filter((key) => fields[key])
    if (selected.length === 0) return null

    return gql`
      query {
        students {
          ${selected.join("\n")}
        }
      }
    `;
  }

  const [students, { data, loading, error }] = useLazyQuery(buildQuery() || gql`query{students{id}}`)

  const handleConsult = () => {
    const q = buildQuery()
    if (q) students({ query: q })
  }

  return (
    <form className="formulario" onSubmit={(e) => e.preventDefault()}>
      <label>Nombre</label>
      <input name="nombre" type="checkbox" onChange={handleChange} />

      <label>Carrera</label>
      <input name="carrera" type="checkbox" onChange={handleChange} />

      <label>Facultad</label>
      <input name="facultad" type="checkbox" onChange={handleChange} />

      <label>Edad</label>
      <input name="edad" type="checkbox" onChange={handleChange} />

      <label>Correo</label>
      <input name="correo" type="checkbox" onChange={handleChange} />

      <button type="button" onClick={handleConsult} className="btn-consultar">
        Consultar BD
      </button>

      <section className="resultado">
        {loading && <p>Cargando...</p>}
        {error && <p>Error: {error.message}</p>}
        {data && (
          <pre>{JSON.stringify(data.students, null, 2)}</pre>
        )}
      </section>
    </form>
  )
}
