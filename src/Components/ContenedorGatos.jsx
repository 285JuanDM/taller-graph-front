export function ContenedorGatos() {
  return (
    <form className="formulario">
      <label>Digita el ID</label>
      <input type="number" />
      
      <label>Nombre</label>
      <input type="checkbox" />

      <label>Peso</label>
      <input type="checkbox" />

      <label>Altura</label>
      <input type="checkbox" />

      <label>Esperanza de vida</label>
      <input type="checkbox" />

      <label>Criado para</label>
      <input type="checkbox" />

      <label>Grupo de raza</label>
      <input type="checkbox" />

      <button type="button" className="btn-consultar">Consultar API</button>

      <section className="resultado">
        <p>Resultado...</p>
      </section>
    </form>
  )
}
