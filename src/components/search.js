import React, { useEffect } from "react";

export default function Search(){
    let api = "https://hn.algolia.com/api/v1/search?query=html"

    const fetchdata = async(url)=>{
        const res = await fetch(url)
        const data = await res.json()
        console.log(data)
    }
    useEffect(() => {
        fetchdata(api)
    }, [])
    
    return(
        <h1>tanmay</h1>
    )
}
