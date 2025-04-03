'use client'
import axios from "axios";
import { useEffect, useState } from "react";

function usuarios (){

        const [ usuarios, alteraUsuarios ] = useState ([]);

        async function buscaUsuarios(){
                const response = await axios.get("http://localhost:3000/api/usuarios")
                console.log(response)
                alteraUsuarios(response.data)
        }
            useEffect(()=> {
                buscaUsuarios()

            }, [])
        


    
    return(
        <div className="px-20">
            
        <h1 className="p-10 mb-10 text-center text-green-700 bg-green-50 text-2xl" >Usuários</h1>
        <p>Estes são usuários do backend</p>

        <hr/>

          {usuarios.map( i=> <p> {i.nome} idade: {i.idade} </p>)}

        </div>
    );
}
export default usuarios;