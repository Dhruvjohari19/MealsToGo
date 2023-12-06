import { mocks } from "./mock";
import camelize from "camelize";

const restaurantService = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    } else {
      resolve(mock);
    }
  });
};

// restaurantService()
//   .then((result) => {
//     console.log(camelize(result,"resulttt"));
//   })
//   .catch((err) => {
//     console.log("error:", err);
//   });

// here , we are manipulating the API -- like in REstaurantinfo screen we have, isOpenNow, isClosedTemporry ,
// but in API it is opening_hours, buisness_status -- so, we are mapping those two varible so tht we have same name over
// whole project...

export const restaurantTransform = ({ results = [] }) => {
  const mappedResult = results.map((restaurant) => {
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });
  console.log(restaurantTransform, "TEansfor");
  console.log(mappedResults, "result dehio");
  return camelize(mappedResults);
};

// const restaurantTransform = ({ results = [] }) => {
//   const mappedData = results.map((restaurant) => {
//     return {
//       ...restaurant,
//       isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
//       isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
//     };
//   });
// };

export default restaurantService;
