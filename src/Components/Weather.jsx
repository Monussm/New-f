import { useState,useEffect } from "react";
const Weather=()=>
{
    const [city,setCity]=useState(null)
    const [search,searchSet]=useState("Bihar")
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=a89b87fd28e5cb4141bd64d84b694a31`
    const getdetails=async()=>
    {
        const response=await fetch (url)
        const ndata=await response.json()
        console.log(ndata)
        setCity(ndata.tem)

    }


useEffect(()=>
{
 
    getdetails()

},[]
)

    return<>
    <div className="container">
        <input type="search" 
        onChange={(event)=>{searchSet(event.target.value)}}/>

    </div>
        <h1>{search.main.temp}</h1>
       
    
    
    
    
    </>
}
export default Weather;