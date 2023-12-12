import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";

export const SearchComponent = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchkeyword, setSearchkeyword] = useState(keyword);
  // console.log(locationContext,"locaton context")
  console.log(keyword,"keyyyword")
  console.log(search,"esarchhh")
  console.log(searchkeyword,"searchkeyy") 
 
  useEffect(() => {
    search(searchkeyword);
  }, []);

  return (
    <View style={styles.search}>
      <Searchbar
        placeholder="Search for Location"
        value={searchkeyword}
        onSubmitEditing={() => {
          search(searchkeyword);
        }}
        onChangeText={(text) => {
          setSearchkeyword(text);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
