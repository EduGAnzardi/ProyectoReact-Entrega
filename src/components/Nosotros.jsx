import { useEffect } from "react"


const Nosotros = () => {

  useEffect(() => {
    const clickear = () => {
      console.log("Click");
    }

    window.addEventListener("click", clickear)

  return () => {
    window.removeEventListener("click", clickear)
  }

}, [])



  return (
    <div className="container">
      <h1 className="main-title">Nosotros</h1>
      <p>Somos una tienda donde podras encontrar las ultimas zapatillas del mercado. Nuestro Equipo se encargará de brindarte la mejor atención. No dudes en contactarnos si tienes alguna duda y/o reclamo.</p>
    </div>
  )
}

export default Nosotros
