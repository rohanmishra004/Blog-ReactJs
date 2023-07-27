import { useState , useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs,setBlogs] = useState(null);
    //generally the data that we are fetching from server takes time so we can add additional state to showcase loading
    const [isPending, setPending] = useState(true)
    const [error , setError] = useState(null)

    useEffect(() => {
        fetch("http://localhost:8000/blogs")
            .then(response => { 
                console.log(response)
                if (!response.ok) {
                    throw Error("could not fetch data for the resource")
                }
                return response.json()
            }).then((data) => {
                console.log(data)
                setBlogs(data)
                
                //once we have the data we want the loading message to disappear so we can use setPenidng useState to false the pending state
                setPending(false)
                setError(null)
            }).catch((err) => {
            //Handling error - This will catch anytype of network error
                setError(err.message)
                setPending(false)
            })
    },[])

    return ( 
        <div className="home">
            {error && <div>{ error }</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title={"All Blogs"}  />}
        </div>
     );
}
 
export default Home;