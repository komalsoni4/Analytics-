import {ActionTypes} from "../constants/ActionsType";


export const setProducts=(products)=>{
  return {
    type:ActionTypes.SET_PRODUCTS,
    payload:products,
  };

};
