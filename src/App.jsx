import './App.css'
import { ContenedorEstudiantes } from './Components/ContenedorEstudiantes'
import { ContenedorGatos } from './Components/ContenedorGatos'

function App() {

  return (
    <main>
      <h1>Taller Graph</h1>

      <div className="contenedores">
        <section className="contenedor">
          <h2>Consulta Estudiantes (Base de Datos)</h2>
          <ContenedorEstudiantes />
        </section>

        <section className="contenedor">
          <h2>Consulta Gatos (API)</h2>
          <ContenedorGatos />
        </section>
      </div>
    </main>
  )
}

export default App
