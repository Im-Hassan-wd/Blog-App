import React, {useState} from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {"id": 1,"title": "New ES6 upgrade available","feed": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto", author: "mario"},
        {"id": 2,"title": "Welcome party","feed": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto", author: "yoshi"},
        {"id": 3,"title": "Wed dev top tips","feed": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto", author: "mario"},
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs);
    }

    return (
        <div className="home">
           <BlogList blogs={blogs} title="All Blogs !" handleDelete={handleDelete} /> 
        </div>
    );
}
 
export default Home;