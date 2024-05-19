import React, { useState } from "react";
import vid from "./vid.mp4"
import axios from "axios";
import { TiWeatherWindyCloudy } from "react-icons/ti";
import { RiLoaderFill } from "react-icons/ri";

const Weather = () => {
  const [value, setValue] = useState("");
  const [temp, setTemp] = useState("");
  const [city, setCity] = useState("");
  const [desc, setDesc] = useState("");
  const [loading, setLoading] = useState(false);

  const getWeather = async () => {
    try {
      setLoading(true);
      const resp = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=560e83ebb4dea4c42c7524194c3aaeb5`
      );
      setLoading(false);
      setTemp(resp.data.main.temp);
      setCity(resp.data.name);
      setDesc(resp.data.weather[0].description);
    } catch (error) {
      alert(error.message);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="relative">
        <div>
          <video
            src={vid}
            autoPlay
            loop
            muted
            playsInline
            className="inset-0 h-screen w-full object-cover"
          ></video>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#07082B]/90 via-black/20 to-black/10 w-full h-screen"></div> 
        <div className="absolute top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center text-white gap-10">
          <div className="flex justify-center items-center h-screen">
            <div className="flex flex-col justify-center items-center gap-10 round-md shadow-lg bg-gradient-to-t from-[#3d3e9b]/20 via-[#0d1060] to-[#151665]/20 w-[400px] h-[600px] rounded-xl">
              <div className="flex justify-center items-center gap-5 py-10">
                <TiWeatherWindyCloudy className="text-[50px] text-white" />
                <h1 className="text-3xl text-white font-bold">
                  Live Weather App
                </h1>
              </div>
              <input
                type="text"
                className="w-[350px] h-[50px] round-xl mt-20 outline-none text-2xl font-bold bg-sky-800 px-2 rounded-xl text-white"
                placeholder="Enter City Name"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <button
                className="bg-sky-500 px-5 py-2 rounded-xl text-white hover:bg-rose-600"
                onClick={getWeather}
              >
                Check Weather
              </button>
              {loading ? (
                <div>
                  <button className="bg-rose-700 px-5 py-2 rounded-xl text-white">
                    <RiLoaderFill className="animate-spin text-xl" />
                  </button>
                </div>
              ) : (
                ""
              )}
              {temp && (
                <h2 className="text-white text-lg text-center">
                  The Current Weather of{" "}
                  <span className="font-bold text-rose-500">{city}</span> is{" "}
                  <span className="font-bold text-rose-500">{temp}°C</span> and
                  It has <span className="font-bold text-rose-500">{desc}</span>
                </h2>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
