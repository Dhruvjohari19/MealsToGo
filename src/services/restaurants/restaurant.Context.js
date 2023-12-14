// // import React, { useState, createContext, useEffect, useContext,useCallback  } from "react";
// // import { StyleSheet, Text, View } from "react-native";
// // import { restaurantTransform } from "./restaurantService";
// // import { restaurantService } from "./restaurantService";
// // import { ActivityIndicator, MD2Colors } from "react-native-paper";
// // import { LocationContext } from "../location/location.context";

// // export const RestaurantContext = createContext();

// // export const RestaurantContextProvider = ({ children }) => {
// //   const [restaurants, setRestaurants] = useState([]);
// //   const [loading, setIsLoading] = useState(false);
// //   const [error, setError] = useState(null);
// //   const { location } = useContext(LocationContext);


// //   const retrieveRestaurants = useCallback((loc) => {
// //     setIsLoading(true);
// //     setRestaurants([]);

// //     setTimeout(() => {
// //       restaurantService(loc)
// //         .then(restaurantTransform)
// //         .then((results) => {
// //           setIsLoading(false);
// //           setRestaurants(results);
// //         })
// //         .catch((err) => {
// //           setIsLoading(false);
// //           setError(err);
// //         });
// //     }, 2000);
// //   }, []); 



//   // const retrieveRestaurants = (loc) => {
//   //   setIsLoading(true);
//   //   setRestaurants([]);

//   //   setTimeout(() => {
//   //      restaurantService(loc)
//   //          .then(restaurantTransform)
//   //       .then((results) => {
//   //         setIsLoading(false);
//   //         setRestaurants(results);
//   //       })
//   //       .catch((err) => {
//   //         setIsLoading(false);
//   //         setError(err);
//   //       });
//   //   }, 2000);
//   // } ;
//   // useEffect(() => {
//   //   if (location) {
//   //     const locationString = `${location.lat},${location.lng}`;
//   //     retrieveRestaurants(locationString);
//   //   }
//   // }, [location]);


// //   useEffect(() => {
// //     const locationString = location ? `${location.lat},${location.lng}` : null;
  
// //     if (locationString) {
// //       retrieveRestaurants(locationString);
// //     }
// //   }, [location, retrieveRestaurants]);

// //   if (loading) {
// //     return (
// //       <View style={styles.loadingContainer}>
// //         <ActivityIndicator
// //           size={"large"}
// //           animating={true}
// //           color={MD2Colors.red800}
// //         />
// //       </View>
// //     );
// //   }
// //   return (
// //     <RestaurantContext.Provider
// //       value={{
// //         restaurants,
// //         loading,
// //         error,
// //       }}
// //     >
// //       {children}
// //     </RestaurantContext.Provider>
// //   );
// // };
// // const styles = StyleSheet.create({
// //   loadingContainer: {
// //     flex: 1,
// //     justifyContent: "center",
// //     alignItems: "center",
// //   },
// // });


// import React, { useState, useContext, createContext, useEffect } from "react";

// import {
//  restaurantService, restaurantTransform
// } from "./restaurantService"

// import { LocationContext } from "../location/location.context";

// export const RestaurantsContext = createContext();

// export const RestaurantsContextProvider = ({ children }) => {
//   const [restaurants, setRestaurants] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const { location } = useContext(LocationContext);

//   const retrieveRestaurants = (loc) => {
//     setIsLoading(true);
//     setRestaurants([]);

//     setTimeout(() => {
//       restaurantService(loc)
//         .then(restaurantTransform)
//         .then((results) => {
//          setIsLoading(false);
//           setRestaurants(results);
//         })
//         .catch((err) => {
//           setIsLoading(false);
//           setError(err);
//         });
//     }, 2000);
//   };
//   useEffect(() => {
//     if (location) {
//       const locationString = `${location.lat},${location.lng}`;
//       retrieveRestaurants(locationString);
//     }
//   }, [location]);

//   return (
//     <RestaurantsContext.Provider
//       value={{
//         restaurants,
//         isLoading,
//         error,
//       }}
//     >
//       {children}
//     </RestaurantsContext.Provider>
//   );
// };





import React, { useState, useContext, createContext, useEffect } from "react";

import {
restaurantService,
restaurantTransform
} from "../restaurants/restaurantService"

import { LocationContext } from "../location/location.context";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  const retrieveRestaurants = (loc) => {
    setIsLoading(true);
    setRestaurants([]);

    setTimeout(() => {
      restaurantService(loc)
        .then(restaurantTransform)
        .then((results) => {
          setIsLoading(false);
          setRestaurants(results);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };
  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retrieveRestaurants(locationString);
    }
  }, [location]);

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};