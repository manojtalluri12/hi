import { Link} from "react-router-dom"
import './index.css'
const Heder =()=>(
    <div className="nav-header">
        <div className="blog-container">
            <h1 className="blog-title">My blog</h1>
            <ul className="nav-menu">
                <li>
                  <Link to="/" className="btn">Home</Link>  
                </li>
                <li>
                <Link to="/about" className="btn">About</Link> 
                </li>
                <li>
                <Link to="/contact" className="btn">Contact</Link> 
                </li>
            </ul>
        </div>
    </div>
)
export default Heder