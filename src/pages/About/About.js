import{ Link} from "react-router-dom";
import './styles.css'

const About = () => {
    return(
        <>
        <nav className="nav">
            <ul >
                <li className="list">
                <Link to="/" className="navbar">Home</Link>
                </li>
                <li>
                    <Link to="/about" className="navbar">About</Link>
                </li>
                <li>
                    <Link to="/contact" className="navbar">Contact</Link>
                </li>
                <li>
                    <Link to="/sign" className="navbar">Sign</Link>
                </li>

            </ul>
        </nav>
        </>
    )
};

export default About;