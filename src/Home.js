import React, {useState} from 'react';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {"id": 1,"title": "New ES6 upgrade available","feed": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto"},
        {"id": 1,"title": "Welcome party","feed": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto"},
        {"id": 1,"title": "Wed dev top tips","feed": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto"},
    ]);
    return (
        <div className="home">
        </div>
    );
}
 
export default Home;