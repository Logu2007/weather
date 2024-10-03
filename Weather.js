import React, { useEffect, useState } from 'react';

const Weather = () => {
    const [WeatherData, setWeatherData] = useState(null); // Change to null
    const [State,setState]=useState()
    const [lat,setlat]=useState()
    const [log,setlog]=useState()
    const [FetchedState,setFetchedState]=useState()


    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${'36db3f9c1aa53e1e6ce8f7f1e71e124d'}`)
        .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then((response) => {
                setWeatherData(response);
                // console.log('Data Fetched Successfully!');
            })
            .catch(err => {
                // alert('API Fetching Error: ' + err.message); // Fixing error message handling
            });
    }, [lat,log]);

    const ConvertToC = (temp) => {
        if (temp !== undefined) {
            const convertedTemp = temp - 273.15;
            return convertedTemp.toFixed(2);
        }
        return "Loading...";
    };

    const ConvertToF = (temp) => {
        const ConvertedFrenhit = (temp - 273.15) * 9 / 5 + 32;
        return ConvertedFrenhit.toFixed(2);
    };

    // Adjusting log statement
    console.log('Weather Description : ', WeatherData?.weather?.[0]?.description || "No description available");
//states json data
const States=[
    {
        "state": "Andhra Pradesh",
        "capital": "Amaravati",
        "latitude": 16.5062,
        "longitude": 80.6480
    },
    {
        "state": "Arunachal Pradesh",
        "capital": "Itanagar",
        "latitude": 27.1025,
        "longitude": 93.6150
    },
    {
        "state": "Assam",
        "capital": "Dispur",
        "latitude": 26.1445,
        "longitude": 91.7862
    },
    {
        "state": "Bihar",
        "capital": "Patna",
        "latitude": 25.5941,
        "longitude": 85.1376
    },
    {
        "state": "Chhattisgarh",
        "capital": "Raipur",
        "latitude": 21.2514,
        "longitude": 81.6296
    },
    {
        "state": "Goa",
        "capital": "Panaji",
        "latitude": 15.4909,
        "longitude": 73.8278
    },
    {
        "state": "Gujarat",
        "capital": "Gandhinagar",
        "latitude": 23.0225,
        "longitude": 72.5714
    },
    {
        "state": "Haryana",
        "capital": "Chandigarh",
        "latitude": 30.7333,
        "longitude": 76.7794
    },
    {
        "state": "Himachal Pradesh",
        "capital": "Shimla",
        "latitude": 31.1048,
        "longitude": 77.1734
    },
    {
        "state": "Jharkhand",
        "capital": "Ranchi",
        "latitude": 23.3441,
        "longitude": 85.3096
    },
    {
        "state": "Karnataka",
        "capital": "Bengaluru",
        "latitude": 12.9716,
        "longitude": 77.5946
    },
    {
        "state": "Kerala",
        "capital": "Thiruvananthapuram",
        "latitude": 8.5241,
        "longitude": 76.9366
    },
    {
        "state": "Madhya Pradesh",
        "capital": "Bhopal",
        "latitude": 23.2599,
        "longitude": 77.4126
    },
    {
        "state": "Maharashtra",
        "capital": "Mumbai",
        "latitude": 19.0760,
        "longitude": 72.8777
    },
    {
        "state": "Manipur",
        "capital": "Imphal",
        "latitude": 24.8170,
        "longitude": 93.9368
    },
    {
        "state": "Meghalaya",
        "capital": "Shillong",
        "latitude": 25.5788,
        "longitude": 91.8933
    },
    {
        "state": "Mizoram",
        "capital": "Aizawl",
        "latitude": 23.1645,
        "longitude": 92.9376
    },
    {
        "state": "Nagaland",
        "capital": "Kohima",
        "latitude": 25.6748,
        "longitude": 94.1120
    },
    {
        "state": "Odisha",
        "capital": "Bhubaneswar",
        "latitude": 20.2961,
        "longitude": 85.8189
    },
    {
        "state": "Punjab",
        "capital": "Chandigarh",
        "latitude": 30.7333,
        "longitude": 76.7794
    },
    {
        "state": "Rajasthan",
        "capital": "Jaipur",
        "latitude": 26.9124,
        "longitude": 75.7873
    },
    {
        "state": "Sikkim",
        "capital": "Gangtok",
        "latitude": 27.0330,
        "longitude": 88.6139
    },
    {
        "state": "Tamil Nadu",
        "capital": "Chennai",
        "latitude": 13.0827,
        "longitude": 80.2707
    },
    {
        "state": "Telangana",
        "capital": "Hyderabad",
        "latitude": 17.3850,
        "longitude": 78.4867
    },
    {
        "state": "Tripura",
        "capital": "Agartala",
        "latitude": 23.8315,
        "longitude": 91.2867
    },
    {
        "state": "Uttar Pradesh",
        "capital": "Lucknow",
        "latitude": 26.8467,
        "longitude": 80.9462
    },
    {
        "state": "Uttarakhand",
        "capital": "Dehradun",
        "latitude": 30.3165,
        "longitude": 78.0322
    },
    {
        "state": "West Bengal",
        "capital": "Kolkata",
        "latitude": 22.5726,
        "longitude": 88.3639
    },
    {
        "state": "Andaman and Nicobar Islands",
        "capital": "Port Blair",
        "latitude": 11.6234,
        "longitude": 92.7265
    },
    {
        "state": "Chandigarh",
        "capital": "Chandigarh",
        "latitude": 30.7333,
        "longitude": 76.7794
    },
    {
        "state": "Dadra and Nagar Haveli and Daman and Diu",
        "capital": "Daman",
        "latitude": 20.3973,
        "longitude": 72.8311
    },
    {
        "state": "Lakshadweep",
        "capital": "Kavaratti",
        "latitude": 10.5691,
        "longitude": 72.6410
    },
    {
        "state": "Delhi",
        "capital": "New Delhi",
        "latitude": 28.6139,
        "longitude": 77.2090
    },
    {
        "state": "Puducherry",
        "capital": "Puducherry",
        "latitude": 11.9416,
        "longitude": 79.8083
    },
    {
        "state": "Tiruvannamalai",
        "latitude": 12.2253,
        "longitude":79.0747
    }
]
//input value
const StateData=(e)=>{
    e.preventDefault()
 const FetchedState=States.find((item)=>item.state===State)

 console.log("FetchedState : ",FetchedState)
if(FetchedState){
    setlat(FetchedState.latitude)
    setlog(FetchedState.longitude)
    setFetchedState(FetchedState.state); // Store the fetched state


}
else{
alert('Data is not Found!')

}

}
console.log('lat : ',lat)
console.log('log : ',log)

    return (
        <>
            <h1 style={{paddingLeft:"40%"}}>Weather</h1>
            <form onSubmit={StateData}style={{paddingLeft:"35%"}}>
                <input type='text'placeholder='Enter the State'onChange={(e)=>{setState(e.target.value)}}/>
                <input type='submit'value='submit'/>
            </form>
            
            <div>
            <br/><br/><br/>{!FetchedState?<h2 style={{paddingLeft:"35%"}}>Data is not Found</h2>:(
                
            <div style={{paddingLeft:"30%"}}>
                
              
                <div>
            {WeatherData && WeatherData.main? (
                <h2>Current Temperature : {ConvertToC(WeatherData.main.temp)}°C / {ConvertToF(WeatherData.main.temp)}°F</h2>
            ) : (
                <h2>Current Temperature: Data is not Found!</h2>
            )}
            </div>
            {WeatherData && WeatherData.weather && WeatherData.weather.length > 0 ? (
                <h2>Weather Description : {WeatherData.weather[0].description}</h2>
            ) : (
                <h2>Weather Description: Data is not Found</h2>
            )}
            {WeatherData && WeatherData.weather? (
                <h2>Humidity : {WeatherData.main.humidity}%</h2>
            ) : (
                <h2>Humidity : Data is not Found</h2>
            )}
            {WeatherData && WeatherData.wind? (
                <h2>Wind Speed : {WeatherData.wind.speed} km/h</h2>
            ) : (
                <h2>Wind Speed : Data is not Found</h2>
            )}
</div> )}  

</div>  </>          
    );
}

export default Weather;