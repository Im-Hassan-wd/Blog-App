import React, {useState} from 'react';

const Home = () => {
    //let name = "Jerry";
    const [name, setName] = useState("Jerry");

    const handleClick = () => {
        setName("Luchi");
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