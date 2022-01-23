import React, {useState} from 'react';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {"id": 1,"title": "New ES6 upgrade available","feed": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto", author: "mario"},
        {"id": 2,"title": "Welcome party","feed": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto", author: "yoshi"},
        {"id": 3,"title": "Wed dev top tips","feed": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto", author: "mario"},
    ]);
    return (
        <div className="home">
            {blogs.map((blog) => (
                <div className="preview" key={blog.id}> 
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                </div>
            ))}
        </div>
    );
}
 
export default Home;