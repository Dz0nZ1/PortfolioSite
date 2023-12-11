import "./navbar.scss"
import {motion} from "framer-motion";
import Sidebar from "../Sidebar/Sidebar.jsx";
import {useContext} from "react";
import OpenContext from "../../context/OpenContext.jsx";
export default function Navbar() {

    const {open} = useContext(OpenContext);


    const moveVariants = {
        initial: {
            x: 0,
            opacity: 1,
        },
        animate: {
            x: 200,
            opacity: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1
            }
        }
    }



    const textVariants = {
        starter: {opacity : 0, scale: 0.5},
        animate : {opacity: 1, scale: 1},
        duration : {duration: 2}
    }


    const variants = open ? moveVariants : textVariants;


    return(
        <div className="navbar">
            <Sidebar/>
            <div className="wrapper">
                <motion.span
                variants={variants}
                initial="starter"
                animate="animate"
                transition="duration"
                >Nikola Lelekovic</motion.span>
                <div className="social">
                    <a href="#"><img src="/instagram.png" alt="instagram"/></a>
                    <a href="#"><img src="/linkedin.png" alt="linkedin"/></a>
                </div>
            </div>
        </div>
    )

}