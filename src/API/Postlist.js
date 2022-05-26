import React, { Component, useState } from "react";
import axios from "axios";

const Postlist = () => {
  const [subuh, setSubuh] = useState("");
  const [syuruk, setSyuruk] = useState("");
  const [zohor, setZohor] = useState("");
  const [asar, setAsar] = useState("");
  const [maghrib, setMaghrib] = useState("");
  const [isyak, setIsyak] = useState("");

  function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
  }

  const convert = (timeNow) => {
    const date = new Date(timeNow * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const time = `${padTo2Digits(hours)}:${padTo2Digits(
      minutes
    )}:${padTo2Digits(seconds)}`;

    return time;
  };

  axios
    .get("https://mpt.i906.my/mpt.json?code=sgr-9&filter=1")
    .then(function (response) {
      console.log(response.data.response.times);
      setSubuh(convert(response.data.response.times[0]));
      setSyuruk(convert(response.data.response.times[1]));
      setZohor(convert(response.data.response.times[2]));
      setAsar(convert(response.data.response.times[3]));
      setMaghrib(convert(response.data.response.times[4]));
      setIsyak(convert(response.data.response.times[5]));
    });
  return (
    <>
      <h1 class="flex justify-center mb-5">Waktu Solat Sepang</h1>
      <hr class="border-1 border-black" />
      <div>
        <h1 class="flex justify-center mb-5">Subuh: {subuh}</h1>
        <hr />
        <h1 class="flex justify-center mb-5">Syuruk: {syuruk}</h1>
        <hr />
        <h1 class="flex justify-center mb-5">Zohor: {zohor}</h1>
        <hr />
        <h1 class="flex justify-center mb-5">Asar: {asar}</h1>
        <hr />
        <h1 class="flex justify-center mb-5">Maghrib: {maghrib}</h1>
        <hr />
        <h1 class="flex justify-center mb-5">Isyak: {isyak}</h1>
      </div>
    </>
  );
};

export default Postlist;
