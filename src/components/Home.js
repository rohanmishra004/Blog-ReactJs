import { useState , useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [name, setName] = useState('mario')
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
            {
                title: "New Work4",
                body: 'lorem ipsum ...',
                author: "User 2",
                id:4
            },
        ]
    )

    const handleDeleteBlog = (id) => {
        const newBlogs = blogs.filter((blog) => (
            blog.id !== id
        ));
        setBlogs(newBlogs)
    }

    //UseEffect mainly used to fetch data or do some authentication which is known as sideEffect in ReactJs

    //Dependencies [] prevent useEffect to run at every render , it only runs when the dependency which is declared inside the useEffect change

    //if we add the name dependency here then useEffect will only run when name value changes and not at any other moment
    useEffect(() => {
        console.log('UseEffect triggerd');
        console.log(name)
    },[name])

    return ( 
        <div className="home">
            <BlogList blogs={blogs } title={"All Blogs"} handleDeleteBlog={handleDeleteBlog} />
            <button onClick={() => setName('luigi')}>Change name</button>
            <p>{name }</p>
        </div>
     );
}
 
export default Home;