// Objetivo: nos permite crear una referencia mutable que persiste durante todo el ciclo de vida
// del componente sin causar un re - render.
// Objetivo2: hacer referencia a un elemento del DOM

import { useRef } from "react"

// Ejemplo:
// Un marcador de un libro que utilizamos para guardar la última posición de la lectura
// no modifica el contenido del libro.

export const BookReader = () => {
  const currentPageRef = useRef<number>(1)
  const nextPage = () => {
    currentPageRef.current += 1;
    console.log(`Avanzaste a la pagina ${currentPageRef.current}`)
  }

  const previousPage = () => {
    if (currentPageRef.current === 1) {
      console.log(`No se puede retroceder la página porque ya te encuentras en ${currentPageRef.current}`)
      return;
    }

    currentPageRef.current -= 1;
    console.log(`Retrocediste a la página ${currentPageRef.current}`)
  }

  const goToPage = (page: number) => {
    if (page < 1) {
      console.log(`No se puede salta a un valor imposible`)
      return;
    }

    currentPageRef.current = page;
    console.log(`Saltaste a la página ${currentPageRef.current}`)
  }

  return (
    <div>
      <h2>Lectura del Libro</h2>
      <p>Página actual: {currentPageRef.current}</p>
      <button onClick={previousPage}>Página Anterior</button>
      <button onClick={nextPage}>Página Siguiente</button>
      <button onClick={() => { goToPage(50) }}>Ir a la página 50</button>
    </div>
  )
}
