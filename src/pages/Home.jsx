import Navigation from "../components/Navigation";
import Social from "../components/Social";
import logo from "../images/ramio-logo.svg"
import { Link } from "react-router-dom";
const Home = () => {
    return ( 
      <section className="home" id="home">
        <div className="content">
          <div className="top">
           <div className="intro-logo"> 
            <img src={logo} alt="logo"/>   
           </div>
           <Navigation/>
          </div>
          <div className="below">
            <div className="textwrapper">
             <h1>
               Nice to
               <br/>
               meet you
             </h1>
             <p className="headline-text">
               We are preparing something amazing and exciting for you. Special surprise for our subscribers only.
             </p>
            <Link to="/">Notify Me</Link>
            </div>
           <Social/>
          </div>
        </div>
        <div className="image">
          <span>
            <b className="larger">137</b>Days to launch
           </span>
         </div>
      </section>
    );
}
 
export default Home;