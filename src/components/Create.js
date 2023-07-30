import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('Mario')

    const [isPending, setPending] = useState(false);


    //This is to redirect the user to a previous page
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author }
        // console.log(blog)
        setPending(true)

        fetch(" http://localhost:8000/blogs", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body:JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added')
            setPending(false)
            //This can take user back one page , but what we want is to redirect the user
            // history.go(-1)
            //Redirecting to home page
            history.push('/')

        })
    }

    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={
                        (e) => {
                            setTitle(e.target.value)
                        }
                    }
                />

                <label>Blog Body:</label>
                <textarea
                    required
                    value={body}
                    onChange={
                        (e) => {
                            setBody(e.target.value)
                        }
                    }
                ></textarea>

                <label>Blog Author:</label>
                <select
                    value={author}
                    onChange={
                        (e) => {
                            setAuthor(e.target.value)
                        }
                    }
                >
                    <option value="Mario">Mario</option>
                    <option value="Yoshi">Yoshi</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Add Blog...</button>}
            </form>
        </div>
     );
}
 
export default Create;