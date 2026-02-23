import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export default function CategoryLayout() {

  
      //oppdatere og endre data i state()
  const [apiData, setApiData] = useState([])
  const [apiEndpoint, setApiEndpoint] = useState()

  const defaultApiUrl = 'https://pokeapi.co/api/v2/'

  const getData = async()=> {
    //Await -> vente på data -> må være med når en bruker API
    const response = await fetch(defaultApiUrl)
    const data = await response.json()
    //det jeg ønsker i state kommer fra Api-et, og det er data.results
    //hvilen nøkkel i data-objektet inneholder det jeg ønsker
    const {type, pokemon, item} = data
    setApiData({type, pokemon, item})
  }
  
  console.log("sjekk", apiData)
  console.log("denne kommer fra Layout:", apiEndpoint)

  useEffect(()=>{
    getData()
  },[])

    return (
        <>
        <nav className="main-nav">
          {/* henter nøkkelverdien i objectet */}
          {Object.keys(apiData)?.map(item => <Link key ={item + 'saj'} to={item} onClick={()=>setApiEndpoint(defaultApiUrl + item)}>{item}</Link>)}
            {/* {apiData?.map((item, index) => <Link key={item.name + '-xt'} to={item.name} onClick={()=>setApiEndpoint(item.url)}>{item.name}</Link>)} */}

        </nav>
        {/* Denne finnes - alt har tilgang til denne  */}
        <Outlet context={{apiEndpoint, defaultApiUrl, setApiEndpoint}}/>
        </>
    )
}