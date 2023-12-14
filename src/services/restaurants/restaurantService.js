import { mockImages, mocks } from "./mock";
import camelize from "camelize";

export const restaurantService = (location) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    } else {
      resolve(mock);
       }
  });
};

// here , we are manipulating the API -- like in REstaurantinfo screen we have, isOpenNow, isClosedTemporry ,
// but in API it is opening_hours, buisness_status -- so, we are mapping those two varible so tht we have same name over
// whole project...

export const restaurantTransform = ({ results = [] }) => {
  
  const mappedResult = results.map((restaurant) => {
    restaurant.photos = restaurant.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];

    });
    return {
      ...restaurant,
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
      
    };
  });
 
  return camelize(mappedResult);
  
};

