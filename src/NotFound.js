import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <div class="logo">404 NOT FOUND</div>
            <div class="error">
                <img class="error-image" src="../public/Scarecrow.png" alt="Scarecrow error image" />
                <div class="content">
                    <h1>I have bad news for you</h1>
                    <p>The page you are looking for might be removed or is temporarily unavailable</p>
                    <Link to="/"></Link>
                </div>
            </div>
        </div>
    );
}
 
export default NotFound;