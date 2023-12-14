import React, { useState, useEffect } from "react";

import { locationRequest, locationTransform } from "./locationService";

export const LocationContext = React.createContext();

export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("San Francisco");
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //  const onSearch = (searchKeyword) => {
  //   setIsLoading(true);
  //   setKeyword(searchKeyword);
  //   if (!searchKeyword.length) {
  //       return;
  //   }
   
  //   locationRequest(searchKeyword.toLowerCase())
  //     .then(locationTransform)
  //     .then((result) => {
  //       console.log(result, "results aya");
  //       setIsLoading(false);
  //       setLocation(result);
  //       console.log(result);
  //     })
  //     .catch((err) => {
  //       setIsLoading(false);
  //       setError(err);
  //     });
  // };
  const onSearch = (searchKeyword) => {
    setIsLoading(true);
    setKeyword(searchKeyword);
  };

  useEffect(() => {
    if (!keyword.length) {
      // don't do anything
      return;
    }
    locationRequest(keyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
        console.log(result);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, [keyword]);
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
