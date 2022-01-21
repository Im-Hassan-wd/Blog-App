import React from 'react';

const Home = () => {
    let name = "Jerry";

    const handleClick = () => {
        name = "Luchi";
    }

    return (
        <div className="home">
            <h1>Home page</h1>
            <p>{ name }</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}
 
export default Home;