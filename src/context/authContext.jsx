import { useState, useEffect, useContext, createContext } from "react";

export const AuthContext = createContext();


export const AuthContextProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

    const login = () => {
        // TODO
        setCurrentUser({id:1, name:'John Doe', profilePicture:"https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"})
    }

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(currentUser))
    }, [currentUser])

    return ( 
        <AuthContext.Provider value={{currentUser, login}}
        >
            {children}
        </AuthContext.Provider>
     );
}


 
