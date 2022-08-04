import { Link } from "react-router-dom";
import LoginForm from "../Components/LoginForm";

const LoginChef = () => {
    return (
      <>
        <main className="containerHome">
        <section className="container flex flex-col justify-center items-center">
          <nav title="Volver" className="m-5 bg-orange-emp-lg/50 p-4 border-2 rounded-tl-lg rounded-br-lg border-orange-emp-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300 ...">
          <Link to="/">
          <img src="./src/img/chef.png"></img>
          </Link>
          </nav>
          <p>¡Bienvenido Chef!</p>
          <hr className="mb-5 mt-2 bg-orange-emp h-0.5 w-60 border-none rounded"/>
          </section>
          <LoginForm/>
         
        </main>
        
      </>
    );
  }

  export default LoginChef