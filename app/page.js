'use client'

import axios from "axios";
import { useState } from "react";


export default function Home() {

  const [pokemons,alteraPokemons] = useState({});
  const [pesquisa,alteraPesquisa] = useState("");

  async function buscaPokemon(){
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon/"+pesquisa)
    alteraPokemons(response.data)

  }

  async function proximoPokemon(proximo) {
    const proximoID = parseInt(pokemons.id) + (proximo == true ? 1: -1);

    const response = await axios.get("https://pokeapi.co/api/v2/pokemon/"+proximoID)
    alteraPokemons(response.data)
    
  }

  
  



  return (
    <div className="px-20">
      
      <h1 className="text-center p-10 mb-10 text-purple-700 bg-indigo-200 text-2x1">Pokédex</h1>
      <p>os melhores pokemons estao aqui</p>
      <hr/>

      <form onSubmit={(e)=> {e.preventDefault();buscaPokemon()}}>
          <p>digite o nome de um Pokemon</p>
          <input onChange={(e)=> alteraPesquisa(e.target.value)} className="border mb-5 mt-5"/>
          <br/>
          <button className="bg-purple-500 text-indigo-50 p-3 mb-10">pesquisar</button>

      </form>

      {
        pokemons.id ?
        <div>
            <img src={pokemons.sprites.front_default}/>
            
            <h2>{pokemons.types[0].type.name}</h2>
            <button onClick={()=> {proximoPokemon(true)}} className="bg-purple-500 text-indigo-50 p-3 mb-10">Proximo</button>
            <button onClick={()=> {proximoPokemon(false)}} className="bg-purple-500 text-indigo-50 p-3 mb-10">Anterior</button>
            
        </div>
        :
          <p>carregando...</p>

      }      
     
    </div>
  );
}
