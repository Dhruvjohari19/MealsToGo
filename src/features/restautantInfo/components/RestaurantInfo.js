import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Button, Card } from "react-native-paper";
import { fontSizes, fonts } from "../../../infrastructure/theme/fonts";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Something in the Rain",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some unnanmed",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  // console.log(ratingArray);

  return (
    <>
      {/* <Text>Restaurant Info </Text> */}
      <Card elevation={5} style={styles.card}>
        <Card.Cover
          key={name}
          style={styles.cover}
          source={{ uri: photos[0] }}
        />
        <Text style={styles.title}>{name}</Text>

        <View
          style={{
            flexDirection: "row",
            paddingTop: 2,
            paddingBottom: 2,
            padding: 16,
          }}
        > 
         
          {ratingArray.map(() => (
            <SvgXml xml={star} width={25} height={25} />
          ))}
          {isClosedTemporarily && (
            <Text variant="label" style={{ color: "red" }}>
              Closed Temporary
            </Text>
          )}

          {isOpenNow && <SvgXml xml={open} width={25} height={25} />}

          <View>
            <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
          </View>

        </View>

        
        <Text style={styles.address}>{address}</Text>
      </Card>
    </>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: "white", marginBottom: 10 },
  cover: { padding: 20, backgroundColor: "white" },
  title: { padding: 16, fontFamily: fonts.body },
  address: { padding: 16, fontFamily: fonts.body },
});
