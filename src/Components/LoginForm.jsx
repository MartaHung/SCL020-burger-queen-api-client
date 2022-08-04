import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


//creando formulario reutilizable
const LoginForm = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
      email: "",
      password: "",
    });
    const handleChange = ({ target: { name, value } }) => {
      setUser({ ...user, [name]: value });
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      axios
        .post("https://apiburgerqueenv1.herokuapp.com/auth", {
          email: "papitas@gmail.com", //valores referenciales
          password: "papitas123456", //valores referenciales
        })
        .then((response) => {
          console.log(response.data);
          localStorage.setItem("token", response.data.token);
          response = navigate("/Tables"); //ruta referencial
        })
  
        .catch((err) => console.log(err));
    };


    return (
      <>
          <section className="flex flex-col justify-center items-center">
            <form action=""  onSubmit={handleSubmit} className="flex flex-col justify-center items-center text-center">
                <label htmlFor="email">
                <input id="email" type="email" name="email" autocomplete="email" required className=" relative block w-full px-3 py-2 my-5 bg-orange-emp-lg/50 border-2  border-orange-emp-lg placeholder-slate-300 text-center text-white rounded-md focus:outline-none focus:ring-yellow-emp focus:border-yellow-emp focus:z-10 sm:text-sm" placeholder="Ingresa tu Email" onChange={handleChange}/> 
                </label>
                <label htmlFor="password" >
                <input id="password" type="password" minLength={6} maxLength={16} name="password" autocomplete="current-password" required className=" relative block w-full px-3 py-2  bg-orange-emp-lg/50 border-2 border-orange-emp-lg placeholder-slate-300 text-center text-white rounded-md focus:outline focus:ring-yellow-emp focus:border-yellow-emp focus:z-10 sm:text-sm" placeholder="Contraseña" onChange={handleChange}/> 
                </label>
                <button type="submit" className="flex flex-col justify-center items-center my-10 text-center">
                <img src="./src/img/logoEmpanada.png" className="h-16 w-16 my-3 rotate-120 hover:rotate-180 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300 ..."></img>
                <div id="arrow-up" ></div>
                <hr className="mb-1 bg-yellow-emp h-0.5 w-40 border-none rounded"/>
                Inicia Sesión</button>
            </form>
          </section>
      </>
    );
  }

  export default LoginForm