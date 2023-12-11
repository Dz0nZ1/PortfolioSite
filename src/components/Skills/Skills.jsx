import "./skills.scss"
import {motion, useInView} from "framer-motion";
import {useContext, useRef} from "react";
import OpenContext from "../../context/OpenContext.jsx";
export default function Skills() {

    const ref = useRef();
    const isInView = useInView(ref, {margin: "-100px" });
    const {open} = useContext(OpenContext);


    const textVariants = {

        initial: {
            x: -500,
            y: 100,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1,
            y: 0,
            transition : {
                duration: 0.5,
                staggerChildren: 0.1
            }
        }

    }

    const moveVariants = {
        initial: {
            x: 0,
            y: 0,
            opacity: 1,
        },
        animate: {
            x: 100,
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1
            }
        },
    }

    const variants = open ? moveVariants : textVariants;


    return(
        <motion.div className="skills" variants={variants} initial="initial" ref={ref} animate={"animate"}>
            <motion.div className="skillsTextContainer" variants={variants}>
                <p>I'm focusing on the development of top-notch solutions</p>
                <hr/>
            </motion.div>
            <motion.div className="skillsTitleContainer" variants={variants}>
                <div className="title">
                    <h1><b>Technologies</b> I mostly work with</h1>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <button>MY TECH STACK?</button>
                </div>
            </motion.div>
            <motion.div className="skillsListContainer" variants={variants}>
                <div className="box">
                    <h2>Java</h2>
                    <p>Using Spring Boot, I have created secure, scalable, user-friendly Java apps,
                        features and seamless integration capabilities.</p>
                </div>
                <div className="box">
                    <h2>MySQL</h2>
                    <p>Designed and managed efficient databases for data storage and retrieval.</p>
                </div>
                <div className="box">
                    <h2>React</h2>
                    <p>Created dynamic, scalable interfaces with adept use of state management and reusable components.</p>
                </div>
            </motion.div>
        </motion.div>
    )

}