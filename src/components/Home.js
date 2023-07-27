import { useState , useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);




    //here we are fetching the data with the fetch call and updating the blogs with setBlogs with the data we get in response
    useEffect(() => {
        fetch("http://localhost:8000/blogs")
            .then(response => {
                return response.json()
            }).then((data) => {
                console.log(data)
                setBlogs(data)
            });
    },[])

    return ( 
        <div className="home">
            {/* here blogs is coming from fetch call which takes some time to reach therefore the initial value of blogs is null hence we have added the && to check blogs data and then update */}

            {/* This is called contiondal templating , thereform Logical && evaluates left first and if its null/false it will not process the right side  */}
            {blogs && <BlogList blogs={blogs} title={"All Blogs"}  />}
        </div>
     );
}
 
export default Home;