import React, { useEffect, useState } from "react";
import {apiUrl, filterData} from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { toast } from "react-toastify";
// import { useEffect } from "react";

const App = () => { 
  const [courses, setCourses] = useState(null)
  useEffect( () => {
    const fetchData = async() => {
      try {
        const res = await fetch(apiUrl);
        const output = await res.json();
        //save into a var
        setCourses(output.data);
        
      } catch (error) {
        toast.error("Gadbad hai bhai");        
      }
    }
    fetchData();
  },[]); 
  return (
    <div>
      <Navbar />

      <Filter filterData = {filterData} />
        
      <Cards courses = {courses}/>
    </div>
  );
};

export default App;
