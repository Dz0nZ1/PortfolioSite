import {motion} from "framer-motion";
import "./sidebar.scss";
import Links from "./Links/Links.jsx";
import ToggleButton from "./ToggleButton/ToggleButton.jsx";
import {useState} from "react";

export default function Sidebar() {

    const [open, setOpen ] = useState(false);



    const variants = {
        open:{
            clipPath: "circle(1200px at 50px 50px)",
            transition: {
                type: "spring",
                stiffness: 20,
            }
        },
        closed: {
            clipPath: "circle(30px at 50px 50px)",
            transition: {
                delay: 0.2,
                type: "spring",
                stiffness: 400,
                damping: 40,
            }
    }
    }

    return (
        <motion.div className='sidebar' animate={open ? "open" : "closed"}>
            <motion.div className="bg" variants={variants}>
                <Links/>
            </motion.div>
            <ToggleButton setOpen={setOpen}/>
        </motion.div>
    )
}