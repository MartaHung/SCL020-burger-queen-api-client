import {Link } from "react-router-dom";

function Home() {


    return (
      <>
        <main className="containerHome">
          <section className="container flex flex-col justify-center items-center">
          <img src="./src/img/logoEmpanada.png" className="h-44 w-44 my-3 rotate-120"></img>
          <h2 className="mb-20 text-8xl font-press-Kaushan">Antojitos </h2>
          
          </section>

            <article className="container flex flex-col justify-center items-center my-5">
            <p>Inicia Sesión</p>
                <hr className=" bg-yellow-emp h-0.5 w-40 border-none rounded "/>
                <div id="arrow-down" ></div>
            
            </article>

          <nav className="flex justify-center items-center">
            <Link to="/LoginWaiter">
            <button className="m-5 bg-orange-emp-lg/50 p-4 border-2 rounded-tl-lg rounded-br-lg border-orange-emp-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300 ...">
            <img src="./src/img/waiter.png"></img>
            </button>
            </Link>
            <Link to="/LoginChef">
            <button className="m-5 bg-orange-emp-lg/50 p-4 border-2 rounded-tr-lg rounded-bl-lg border-orange-emp-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300 ...">
            <img src="./src/img/chef.png"/>
            </button>
            </Link>
          </nav>
        </main>
      </>
    );
  }
  
  export default Home