import React, { useState, createContext, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { restaurantTransform } from "./restaurantService";
import { restaurantService } from "./restaurantService";
import { ActivityIndicator, MD2Colors } from 'react-native-paper';


export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


 

  const retrieveRestaurants = () => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantService().then(restaurantTransform).then((results) => {
          console.log(results, "Poonam resultd ")
          setIsLoading(false);
          setRestaurants(results);
        })
        .catch((err) => {
          console.log(err, "error dkho")
          setIsLoading(false);
         
          setError(err);
        });
    },2000);
  };

  useEffect(() => {
    retrieveRestaurants();
  }, []);
  console.log("Providing data:", restaurants );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator  size={"large"} animating={true} color={MD2Colors.red800} />
      </View>
    );
  }
  return (
    <RestaurantContext.Provider
      value={{
        restaurants,
        loading,
        error,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
