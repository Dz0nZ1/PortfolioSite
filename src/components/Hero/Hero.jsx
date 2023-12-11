import "./hero.scss"
import {motion} from "framer-motion";
import {useContext} from "react";
import OpenContext from "../../context/OpenContext.jsx";




export default function Hero() {

    const {open} = useContext(OpenContext);

    const textVariants = {
        initial: {
            x: -500,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1
            }
        },

        scrollButton : {
            opacity: 0,
            y: 10,
            transition : {
                duration: 20,
                repeat: Infinity,
                repeatType: "mirror"
            }
        }
    }


    const moveVariants = {
        initial: {
            x: 0,
            opacity: 1,
        },
        animate: {
            x: 100,
            opacity: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1
            }
        },

        scrollButton : {
            x: 300,
            opacity: 0,
            y: 10,
            transition : {
                duration: 20,
                repeat: Infinity,
                repeatType: "mirror"
            }
        }
    }



    const sliderVariants = {
        initial: {
            x: 0,
        },
        animate: {
            x: "-150%",
            repeat: Infinity,
            transition: {
                duration: 20,
                repeat: Infinity,
                repeatType: "mirror",
                staggerChildren: 0.1
            }
        },
    };

    const variants = open ? moveVariants : textVariants;


    return(
        <div className="hero">
            <div className="wrapper">
                <motion.div variants={variants} initial="initial" animate="animate"  className="textContainer">
                    <motion.h2 variants={variants} >Hi,</motion.h2>
                    <motion.h2 variants={variants} >I'm <b>Nikola</b></motion.h2>
                    <motion.h1 variants={variants} >Backend/Fullstack Developer</motion.h1>
                    <motion.div variants={variants}  className="buttons">
                        <button>See the Latest Works</button>
                        <button>Contact me</button>
                    </motion.div>
                    <motion.img animate="scrollButton" variants={variants}  src="/scroll.png" alt="scroll"/>
                </motion.div>
            </div>
            <motion.div variants={sliderVariants} initial="initial" animate="animate" className="slidingTextContainer">Software Development</motion.div>
        </div>
    )
}