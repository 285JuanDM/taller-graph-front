import { gql } from "@apollo/client";
import { useLazyQuery } from "@apollo/client/react";
import { useState } from "react";

export function ContenedorGatos() {
  const [breedId, setBreedId] = useState("");
  const [fields, setFields] = useState({
    name: false,
    weight: false,
    height: false,
    lifeSpan: false,
    bredFor: false,
    breedGroup: false,
  })

  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.checked });
  }

  const buildQuery = () => {
    const selected = Object.keys(fields).filter((key) => fields[key]);
    if (selected.length === 0) return null;

    return gql`
      query ($breedId: String!) {
        breed(breedId: $breedId) {
          ${selected.join("\n")}
        }
      }
    `
  }

  const [breed, { data, loading, error }] = useLazyQuery(buildQuery() || gql`query($id: ID!){breed(id:$id){id}}`);

  const handleConsult = () => {
    const q = buildQuery();
    if (q && breedId) breed({ query: q, variables: { breedId } })
  }

  return (
    <form className="formulario" onSubmit={(e) => e.preventDefault()}>
      <label>Digita el ID</label>
      <input type="text" value={breedId} onChange={(e) => setBreedId(e.target.value)} />

      <label>Nombre</label>
      <input name="name" type="checkbox" onChange={handleChange} />

      <label>Peso</label>
      <input name="weight" type="checkbox" onChange={handleChange} />

      <label>Altura</label>
      <input name="height" type="checkbox" onChange={handleChange} />

      <label>Esperanza de vida</label>
      <input name="lifeSpan" type="checkbox" onChange={handleChange} />

      <label>Criado para</label>
      <input name="bredFor" type="checkbox" onChange={handleChange} />

      <label>Grupo de raza</label>
      <input name="breedGroup" type="checkbox" onChange={handleChange} />


      <button type="button" onClick={handleConsult} className="btn-consultar">
        Consultar API
      </button>

      <section className="resultado">
        {loading && <p>Cargando...</p>}
        {error && <p>Error: {error.message}</p>}
        {data && (
          <pre>{JSON.stringify(data.breed, null, 2)}</pre>
        )}
      </section>
    </form>
  );
}
