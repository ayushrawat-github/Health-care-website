import React, { useContext } from "react";
import { createContext } from "react";
const HomeServContext = createContext({
  Homeserv: [
    {
      ImgLink:
        "https://images.unsplash.com/photo-1601841162542-956af38ba052?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      Name: "ICU",
      infoServ: [
        "hello this depart is for icu services here we provide one of services in sharanpur we have given this serv to thousand of people and in our hosipital we have best doctor",
        "hello this depart is for icu services here we provide one of services in sharanpur we have given this serv to thousand of people and in our hosipital we have best doctor",
        "hello this depart is for icu services here we provide one of services in sharanpur we have given this serv to thousand of people and in our hosipital we have best doctor",
      ],
    },
  ],

});
export default HomeServContext ;
export const useHomeServData = ()=> {
  return useContext(HomeServContext);
}