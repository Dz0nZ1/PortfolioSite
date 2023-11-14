import "./navbar.scss"
import {motion} from "framer-motion";
import Sidebar from "../Sidebar/Sidebar.jsx";
export default function Navbar() {

    const variants = {
        starter: {opacity : 0, scale: 0.5},
        animate : {opacity: 1, scale: 1},
        duration : {duration: 2}
    }

    return(
        <div className="navbar">
            <Sidebar/>
            <div className="wrapper">
                <motion.span
                variants={variants}
                initial="starter"
                animate="animate"
                transition="duration"
                >Nikola</motion.span>
                <div className="social">
                    <a href="#"><img src="/facebook.png" alt="facebook"/></a>
                    <a href="#"><img src="/instagram.png" alt="instagram"/></a>
                    <a href="#"><img src="/youtube.png" alt="youtube"/></a>
                    <a href="#"><img src="/dribbble.png" alt="dribble"/></a>
                </div>
            </div>
        </div>
    )

}