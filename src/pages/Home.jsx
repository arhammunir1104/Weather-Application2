import React, { useEffect, useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import CompressIcon from '@mui/icons-material/Compress';
import CloudIcon from '@mui/icons-material/Cloud';


function Home(){
    const [input, setInput] = useState("London");
    const [data, setData] = useState();
    const [loader, setLoader] = useState(true);

    
    async function getWeatherData(){

        setLoader(true);
        const weatherData = await fetch(`
                   https://api.weatherapi.com/v1/current.json?key=b1c254b28d464f2f839105529260903&q=${input}&aqi=no`)
    
        const response = await weatherData.json();
   

        setData(response);
        setLoader(false);
    
                }

    


    useEffect(()=>{
        getWeatherData();
    }, [input]);

    return(
        <>

        <div>
            <div style={{border : "2px solid red", width : "80vw", height : "250px"}}>
                {
                    loader
                    ?
                    <>
                         <div style={{display  :"flex", justifyContent : "center", alignItems : "center"}}>
                            <Box sx={{ display: 'flex' }}>
                            <CircularProgress />
                            </Box>
                         </div>
                    </>

                    :
                    <>
                    <div>
                        <h3>City: {data?.location?.name}</h3>
                        <h3>Country: {data?.location?.country}</h3>

                        <div>
                            <p><DeviceThermostatIcon /> Temperature : {data?.current?.temp_c} C</p>
                            <p><CompressIcon /> Pressure : {data?.current?.pressure_in} In</p>
                            <p><CloudIcon /> Wind : {data?.current?.wind_kph} Kph</p>
                        </div>
                    </div>
                    
                    </>
                }
            </div>


            <div style={{marginTop : "10px"}}>
                <label>Select City</label>
                <select value={input} onChange={(e)=>{setInput(e.target.value)}} >

                    <option value={"London"}>London</option>
                    <option value={"Karachi"}>Karachi</option>
                    <option value={"Lahore"}>Lahore</option>
                    <option value={"Islamabad"}>Islamabad</option>
                    <option value={"Pehsawar"}>Pehsawar</option>
                    <option value={"Multan"}>Multan</option>
                    <option value={"New york"}>New york</option>

                </select>
            </div>

        </div>

        </>
    )

};


export default Home;