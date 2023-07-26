import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(
        [
            {
                title: "New Work1",
                body: 'lorem ipsum ...',
                author: "User 1",
                id:1
            },
            {
                title: "New Work2",
                body: 'lorem ipsum ...',
                author: "User 2",
                id:2
            },
            {
                title: "New Work3",
                body: 'lorem ipsum ...',
                author: "User 1",
                id:3
            },
        ]
    )

    const handleDeleteBlog = (id) => {
        const newBlogs = blogs.filter((blog) => (
            blog.id !== id
        ));
        setBlogs(newBlogs)
    }


    return ( 
        <div className="home">
            <BlogList blogs={blogs } title={"All Blogs"} handleDeleteBlog={handleDeleteBlog} />
           
        </div>
     );
}
 
export default Home;