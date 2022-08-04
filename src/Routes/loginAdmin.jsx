import { Link } from "react-router-dom";

const LoginAdmin = () => {



    return (
      <>
        <main className="containerHome">
        <section className="container flex flex-col justify-center items-center">
          <nav title="Volver" className="m-5 bg-orange-emp-lg/50 p-4 border-2 rounded-lg border-orange-emp-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300 ...">
          <Link to="/">
          <img src="./src/img/admin.png"></img>
          </Link>
          </nav>
          <p>¡Bienvenido Administrador!</p>
          <hr className="mb-5 mt-2 bg-orange-emp h-0.5 w-60 border-none rounded"/>
          </section>

          <section className="flex flex-col justify-center items-center">
            <form action=""  className="flex flex-col justify-center items-center text-center">
                <label htmlFor="email">
                <input type="text" name="email" autocomplete="email" required className=" relative block w-full px-3 py-2 my-5 bg-orange-emp-lg/50 border-2  border-orange-emp-lg placeholder-slate-300 text-center text-white rounded-md focus:outline-none focus:ring-yellow-emp focus:border-yellow-emp focus:z-10 sm:text-sm" placeholder="Ingresa tu Email"/> 
                </label>
                <label htmlFor="password" >
                <input type="password" minLength={6} maxLength={8} name="password" autocomplete="current-password" required className=" relative block w-full px-3 py-2  bg-orange-emp-lg/50 border-2 border-orange-emp-lg placeholder-slate-300 text-center text-white rounded-md focus:outline focus:ring-yellow-emp focus:border-yellow-emp focus:z-10 sm:text-sm" placeholder="Contraseña"/> 
                </label>
                <Link to="/Tables">
                <button type="submit" className="flex flex-col justify-center items-center my-10 text-center">
                <img src="./src/img/logoEmpanada.png" className="h-16 w-16 my-3 rotate-120 hover:rotate-180 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300 ..."></img>
                <div id="arrow-up" ></div>
                <hr className="mb-1 bg-yellow-emp h-0.5 w-40 border-none rounded"/>
                Inicia Sesión</button></Link>
            </form>
          </section>
        </main>
        <nav>
          
        </nav>
      </>
    );
  }

  export default LoginAdmin