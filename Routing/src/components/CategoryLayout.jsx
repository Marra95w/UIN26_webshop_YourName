import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export default function CategoryLayout() {

      //oppdatere og endre data i state()
  const [apiData, setApiData] = useState([])
  const [apiEndpoint, setApiEndpoint] = useState()

  const getData = async()=> {
    //Await -> vente på data -> må være med når en bruker API
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=10%22')
    const data = await response.json()
    //det jeg ønsker i state kommer fra Api-et, og det er data.results
    setApiData(data.results)
  }
  
  console.log(apiData)
  console.log(apiEndpoint)

  useEffect(()=>{
    getData()
  },[])

    return (
        <>
        <nav className="main-nav">

            {apiData?.map((item, index) => <Link key={item.name + '-xt'} to={item.name} onClick={()=>setApiEndpoint(item.url)}>{item.name}</Link>)}

        </nav>
        <Outlet />
        </>
    )
}