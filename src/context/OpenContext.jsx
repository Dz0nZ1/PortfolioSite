import {createContext, useState} from "react";


const OpenContext = createContext();


// eslint-disable-next-line react/prop-types
export function OpenProvider({children}){

    const [open, setOpen ] = useState(false);


    return(
        <OpenContext.Provider value={{ open, setOpen}}>
            {children}
        </OpenContext.Provider>
    )
}



export default OpenContext;