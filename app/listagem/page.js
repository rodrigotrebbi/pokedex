'use client'
import axios from "axios";
import { useEffect, useState } from "react";

function Listagem() {

    const [pokemons,alteraPokemons] = useState([])

    async function buscaTodosPokemons(){
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon/")
        alteraPokemons(response.data.results)

    }

    useEffect( ()=> {
        buscaTodosPokemons()
    }, [] )

    return ( 
        <div className="px-20">
            <h1 className="p-10 mb-10 text-center text-red-50 text 2x1"> Lista de pokemons</h1>

            <hr/>

            {
                pokemons.length > 0 ?
                <ul>
                    {
                        pokemons.map((i, index)=> 
                        
                            <li className="flex items-center gap-4">
                                <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/"+(index+1)+".gif"}/>
                                
                                <p><strong>{index + 1}</strong> <br/> {i.name} </p>
                            </li>
                        
                        
                        )
                    }
                </ul>
                :
                 <p>carregando...</p>
            
            }




        </div>

     );
}

export default Listagem;
