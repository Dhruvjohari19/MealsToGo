import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  FlatList,
} from "react-native";
import React, { useContext } from "react";
import {SearchComponent} from "../features/restautantInfo/components/SearchComponent";
import { RestaurantInfo } from "../features/restautantInfo/components/RestaurantInfo";
import { RestaurantsContext } from "../services/restaurants/restaurant.Context";



export const HomeScreen = () => {
  const isAndroid = Platform.OS === "android";
  const { restaurants, loading, error } = useContext(RestaurantsContext);
  // console.log(error,"error dkho")

  return ( 
    <>
      <SafeAreaView style={styles.container}>
        <SearchComponent />
        <View style={styles.list}>
        <FlatList
          data={restaurants}
          renderItem={({ item }) => {
            // console.log(item, "item arre ke naa");
            return <RestaurantInfo restaurant={item} />;
          }}
          keyExtractor={(item) => item.name}
          contentContainerStyle={{ padding: 16 }}
        />
        </View>
      </SafeAreaView>
    </>
  );
};

// export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
    marginTop: 10,
    height: 35,
  },
  list: {
    // flex: 1,
    padding: 16,
    marginTop: 34,
    height: 900,
  },
});


