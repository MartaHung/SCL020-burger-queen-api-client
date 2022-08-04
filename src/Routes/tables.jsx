import { Link } from "react-router-dom";

const Tables = () => {
    return (
      <>
        <main className="">
      <header className="container flex flex-row justify-center items-center">
        <img src="./src/img/logoEmpanada.png" alt="" className="h-16 w-16 my-3 rotate-120"/>
        <div className="h-16 w-24 m-2 bg-orange-emp-lg/50 p-2 border-2 rounded-tl-lg rounded-br-lg border-orange-emp-lg">
          <img src="./src/img/waiter.png" alt="" className="" />
        </div>
        <article className="container flex flex-col items-start">
        <p>Mesero</p>
        <p>id:</p>
        </article>
        <img src="./src/img/logout.png" alt="" className="h-12 w-12 my-3"/>
      </header>
      <hr className="mb-5 mt-2 bg-orange-emp h-0.5 w-full border-none rounded"/>
      <section className="container flex flex-col justify-center items-center">
        <button className="w-lg px-3 py-2 my-5 bg-orange-emp-lg/80 border-2 border-orange-emp-lg text-white rounded-md">
          Ver pendientes
        </button>
      </section> 
      <section className="flex flex-col justify-center items-center">
        <img src="./src/img/logoEmpanada.png" alt="" className="h-16 w-16 m-0"/>
        <button className="flex flex-col justify-center items-center m-0 bg-orange-emp-lg/50 p-4 border-2 rounded-md border-orange-emp-lg ">
          <p>Mesa</p>
          <p>01</p>          
        </button>
      </section> 
        </main>
      
      </>
    );
  }

  export default Tables