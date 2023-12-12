import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState, createContext } from "react";
import { locationRequest, locationTransform } from "./locationService";

export const LocationContext = React.createContext();

export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("San Francisco");
  const [location, setIsLocations] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setIsError] = useState(null);
 
  //  console.log(keyword,"Keyword")
  //  console.log(location,"Locationnnn")
  //  console.log(error,"errorrr")
  
  const onSearch = (searchKeyword) => {
    setIsLoading(true);
    setKeyword(searchKeyword);
    console.log(searchKeyword,"search keyword")

    if (!searchKeyword.length) {
        return;
    }

    locationRequest(searchKeyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false);
        setIsLocations(result);
        // console.log(result, "resultsss");
        // setIsError(null);
      })
      .catch((err) => {
        setIsLoading(false);
        // setIsLocations(null);
        setIsError(err);
        // console.log(err, "erro dkhio po");
      });
  };

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        search: onSearch,
        keyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

const styles = StyleSheet.create({});
