import "./portfolio.scss"
import {motion, useScroll, useSpring, useTransform} from "framer-motion";
import {useContext, useRef} from "react";
import OpenContext from "../../context/OpenContext.jsx";

const items = [

    {
        id: 1,
        title: "MiloNite Workout Tracker",
        img: "https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc:"you can initialize the tsParticles instance (engine) here, adding custom shapes or presets"

    },

    {
        id: 2,
        title: "Travel Agency Prototype",
        img: "https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc:"you can initialize the tsParticles instance (engine) here, adding custom shapes or presets"

    },

    {
        id: 3,
        title: "BookStore Reservation Prototype",
        img: "https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc:"you can initialize the tsParticles instance (engine) here, adding custom shapes or presets"

    }


];

const Single = ({item}) => {

    const ref = useRef();

    const {scrollYProgress} = useScroll({target: ref});

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);


    return (
        <section>
           <div className="container">
               <div className="wrapper">
                   <div className="imgContainer" ref={ref}>
                       <img src={item.img} alt={item.title}/>
                   </div>
                   <motion.div className="portfolioTextContainer" style={{y}}>
                       <h2>{item.title}</h2>
                       <p>{item.desc}</p>
                       <button>See Code</button>
                   </motion.div>
               </div>
           </div>
        </section>
    )
}


export default function Portfolio() {

    const ref = useRef()

    const {scrollYProgress} = useScroll({target: ref, offset:["end end" , "start start"]})

    const scaleX = useSpring(scrollYProgress, {
        stiffness:100,
        damping: 30,
    })

    const {open} = useContext(OpenContext);


    const oldVariants = {
        initial: {
            x: 100,
            opacity: 1,
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1
            }
        },
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
    }

    const variants = open ? moveVariants : oldVariants;


    return(
    <motion.div variants={variants} initial="initial" animate="animate" className="portfolio" ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{scaleX}} className="progressBar"></motion.div>
        </div>
        {items.map((item, index) => {
            return(
                <Single key={index} item={item}/>
            )
        })}
    </motion.div>
    )
}