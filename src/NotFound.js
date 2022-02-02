import { Link } from "react-router-dom";
import scarescrow from "./Scarecrow.png";

const NotFound = () => {
    return (
        <div className="not-found">
            <div className="logo">404 NOT FOUND</div>
            <div className="error">
                <img className="error-image" src={scarescrow} alt="Scarecrow error" />
                <div className="content">
                    <h1>I have bad news for you</h1>
                    <p>The page you are looking for might be removed or is temporarily unavailable</p>
                    <Link to="/">Back to homepage</Link>
                </div>
            </div>
        </div>
    );
}
 
export default NotFound;