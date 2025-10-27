export function ContenedorEstudiantes() {
  return (
    <form className="formulario">
      <label>Digita el ID</label>
      <input type="number" />

      <label>Nombre</label>
      <input type="checkbox" />

      <label>Fecha nacimiento</label>
      <input type="checkbox" />

      <label>Carrera</label>
      <input type="checkbox" />

      <label>Semestre</label>
      <input type="checkbox" />

      <label>Correo</label>
      <input type="checkbox" />

      <label>Promedio</label>
      <input type="checkbox" />

      <button type="button" className="btn-consultar">Consultar BD</button>

      <section className="resultado">
        <p>Resultado...</p>
      </section>
    </form>
  )
}
