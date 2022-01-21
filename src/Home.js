import React from 'react';

const handleClick = () => {
    console.log("hello ninja")
}

const Home = () => {
    return (
        <div className="home">
            <h1>Home page</h1>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}
 
export default Home;