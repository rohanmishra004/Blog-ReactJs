//Custom Hooks - need to start with word 'use' , here we are using 'useFetch'
import {useState, useEffect} from 'react'


const useFetch = (url) => {
    const [data,setData] = useState(null);
    const [isPending, setPending] = useState(true)
    const [error , setError] = useState(null)


     useEffect(() => {
        fetch(url)
            .then(response => { 
                console.log(response)
                if (!response.ok) {
                    throw Error("could not fetch data for the resource")
                }
                return response.json()
            }).then((data) => {
                setData(data)
                setPending(false)
                setError(null)
            }).catch((err) => {
                setError(err.message)
                setPending(false)
            })
     }, [url])
    
    return {
        data, isPending, error
    }
}

export default useFetch;