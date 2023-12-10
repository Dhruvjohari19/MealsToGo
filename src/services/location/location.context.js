import { StyleSheet, Text, View } from 'react-native'
import {React, useEffect,useState,createContext} from 'react'



const locationContext = createContext();

export const locationContextProvider = ({children})=>{


    return(
        <locationContext.Provider value={{
            loading,
            error,
            location,
            search:()=>null,
            keyword
        }}>
            {children}
        </locationContext.Provider>

    )
}


export default locationContext

const styles = StyleSheet.create({})