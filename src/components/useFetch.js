//Custom Hooks - need to start with word 'use' , here we are using 'useFetch'
import {useState, useEffect} from 'react'


const useFetch = (url) => {
    const [data,setData] = useState(null);
    const [isPending, setPending] = useState(true)
    const [error , setError] = useState(null)


    useEffect(() => {
        const abortCont = new AbortController();
        fetch(url, {signal:abortCont.signal})
            .then(response => { 
                if (!response.ok) {
                    throw Error("could not fetch data for the resource")
                }
                return response.json()
            }).then((data) => {
                setData(data)
                setPending(false)
                setError(null)
            }).catch((err) => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted')
                } else {
                    setError(err.message)
                    setPending(false)
                }
                
            })
        return () => abortCont.abort();
     }, [url])
    
    return {
        data, isPending, error
    }
}

export default useFetch;