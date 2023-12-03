
import {mocks} from "./mock"

export const restaurantRequest = (location="37.7749295,-122.4194155")=>{
// console.log(mocks[location])

   return new Promise((resolve,reject)=>{
    const mock = mocks[location]

    if(!mocks){ reject
      ("Not found");
    }
    resolve(mock).then((result) =>{
        console.log(result)
    })
    
   })



}

restaurantRequest();