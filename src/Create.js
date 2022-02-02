import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState("");
    const [feed, setFeed] = useState("");
    const [author, setAuthor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {
            title, feed, author
        };

        fetch("http://localhost:8000/blogs", {
            method: "POST",
            headers: { "content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("new blog added");
        })
    }

    return (
        <div className="create">
            <h2>Add a New blog!</h2>
            <form onSubmit={ handleSubmit }>
                <label>Blog title:</label>
                <input 
                    type="text" 
                    required 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea 
                    required
                    onChange={(e) => setFeed(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select 
                    value={author} 
                    onChange={(e) => setAuthor(e.target.value)}               
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                <button>Add blog</button>
                <p>{ title }</p>
                <p>{ feed }</p>
                <p>{ author }</p>
            </form>
        </div>
    );
}
 
export default Create;