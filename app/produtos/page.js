'use client'
import axios from "axios";
import { useEffect, useState } from "react";

function produtos (){

        const [ produtos, alteraprodutos ] = useState ([]);

        async function buscaprodutos(){
                const response = await axios.get("http://localhost:3000/api/produtos")
                console.log(response)
                alteraprodutos(response.data)
        }
            useEffect(()=> {
                buscaprodutos()

            }, [])
        


    
    return(
        <div className="px-20">
            
        <h1 className="p-10 mb-10 text-center text-green-700 bg-green-50 text-2xl" >produtos</h1>
        <p>Estes são produtos do banco de dados</p>

        <hr/>

        <div class="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-10">
            
            {produtos.map( i=>  <p>  {i.nome} - {i.preco.toFixed(2)}  <br/> <strong> Em estoque: {i.quantidade} </strong>  </p> )} 

            <hr/>
            
          
        </div>
        
          

        </div>
    );
}
export default produtos;