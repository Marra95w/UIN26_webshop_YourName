import { use } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";

//hente ut data fra API-et fra CategoryLayout og useOutletCOntext og vise det i Category.jsx
export default function Category() {
    const {apiEndpoint, defaultApiUrl} = useOutletContext()
    const [apiData, setApiData] = useState([])

    const spritesImg = apiData?.sprites
    ? Object.keys(apiData.sprites) 
    : [];

    const { slug,cat } = useParams()

    console.log("denne kommer fra Category:", apiEndpoint)

    const getSingleData = async()=> {
        //Await -> vente på data -> må være med når en bruker API
        //om api endepuntk finnes, eller ikke finnes defaultApiUrl + slug
        const response = await fetch(apiEndpoint ? apiEndpoint : defaultApiUrl+slug+"/"+cat)
        const data = await response.json()
        setApiData(data)
        console.log(apiData)
    }

    

    useEffect(()=>{
        getSingleData()
    },[cat, apiEndpoint])

    return (
    <main>
        <h1>{apiData?.name}</h1>
            <section>
                <h2>Bilder</h2>
                {spritesImg?.map((item) =>(
                    apiData?.sprites[item] ?
               
                <img key={item} src={apiData?.sprites?.[item]} alt={apiData?.name} />
                : null
             ))}
            </section> 
    </main>
)
    
}