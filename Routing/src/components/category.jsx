import { use } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

//hente ut data fra API-et fra CategoryLayout og useOutletCOntext og vise det i Category.jsx
export default function Category() {
    const {apiEndpoint, defaultApiUrl} = useOutletContext()
    

    const [apiData, setApiData] = useState([])
    const {slug} = useParams()

    console.log("denne kommer fra Category:", apiEndpoint)

    const getSingleData = async()=> {
        //Await -> vente på data -> må være med når en bruker API
        //om api endepuntk finnes, eller ikke finnes defaultApiUrl + slug
        const response = await fetch(apiEndpoint ? apiEndpoint : defaultApiUrl+slug)
        const data = await response.json()
        setApiData(data)
        console.log(apiData)
    }
    useEffect(()=>{
        getSingleData()
    },[slug])

    return (
    <main>
        <h1>{apiData?.name}</h1>
            <section>
                <h2>Bilder</h2>
                <img src={apiData?.sprites?.front_default} alt={apiData?.name} />
            </section> 
    </main>
)
    
}