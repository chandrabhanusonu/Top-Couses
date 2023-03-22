import './App.css';
import React, { useEffect, useState } from 'react';
import Navbar from "./Component/Navbar";
import Filter from './Component/Filter';
import Cards from "./Component/Cards";
import Spinner from './Component/Spinner';
import {apiUrl , filterData} from "./data";

import { toast } from 'react-toastify';

const App = () => {
    const [courses,setCourses] = useState(null);
    const [loading,setLoading] = useState(true);

    
      async function fetchData() {
        setLoading(true);
        try{
          let response = await fetch(apiUrl);
          let Output = await response.json();
          console.log(Output);
          // Output
          setCourses(Output.data)
        }
        catch(error){
          toast.error("Network Error");
        }
        setLoading(false);
      }
      
    useEffect( () => {
      fetchData();
    },[])

      return(
        <div className="wrapper">
          <div>
            <Navbar />
          </div>
          <div>
            <Filter filterData ={filterData} />
          </div>
          <div>
            {
              loading ? (<Spinner/>) : (<Cards courses={courses} />)
            }
          </div>     
      </div>
      )
       
  }   

  
export default App;