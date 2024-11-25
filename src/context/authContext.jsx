import { useState, useEffect, useContext, createContext } from "react";

export const AuthContext = createContext();


export const AuthContextProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

    const toggle = () => {
        setDarkMode(!darkMode)
    }

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(currentUser))
    }, [currentUser])

    return ( 
        <AuthContext.Provider value={{}}
        >
            {children}
        </AuthContext.Provider>
     );
}


 
