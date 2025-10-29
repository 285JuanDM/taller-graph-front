export function ContenedorEstudiantes() {
  return (
    <form className="formulario">
      <label>Nombre</label>
      <input type="checkbox" />

      <label>Carrera</label>
      <input type="checkbox" />

      <label>Facultad</label>
      <input type="checkbox" />

      <label>Semestre</label>
      <input type="checkbox" />

      <label>Correo</label>
      <input type="checkbox" />

      <button type="button" className="btn-consultar">Consultar BD</button>

      <section className="resultado">
        <p>Resultado...</p>
      </section>
    </form>
  )
}
