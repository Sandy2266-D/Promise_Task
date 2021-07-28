//1.create a request variable from XMLHttpRequest
var request=new XMLHttpRequest();
//2.Create a new conncetion.
request.open('GET','https://restcountries.eu/rest/v2/all',true)
//3.Send request
request.send();
//4.Load the data.
request.onload=function()
{
	var countryData = JSON.parse(this.response);
	//console.log(countryData);
    document.getElementById("Capital").innerHTML=countryData[0].capital;
    document.getElementById("Region").innerHTML=countryData[0].region;
    document.getElementById("CountryCode").innerHTML=countryData[0].cioc;
    document.getElementById("Capital2").innerHTML=countryData[2].capital;
    document.getElementById("Region2").innerHTML=countryData[2].region;
    document.getElementById("CountryCode2").innerHTML=countryData[2].cioc;
    document.getElementById("Capital3").innerHTML=countryData[3].capital;
    document.getElementById("Region3").innerHTML=countryData[3].region;
    document.getElementById("CountryCode3").innerHTML=countryData[3].cioc;
    //console.log(countryData[0].name)
    // fetch(api.openweathermap.org/data/2.5/weather?q= &appid :'ba0f0460ac6b50a0197e077fcb3da29c')
    // .then(res=>res.json())
    // .then(data=>function(data)
    // {
    // return res.json();
    // }).then(function(data)
    // {
    //     console.log(data)
    // })
}
function call()
{
    let climate=document.getElementById("climate")
    // let temp=document.getElementById("temp")
// //const proxy="https://cors-anywhere.herokuapp.com/";
const url = `https://api.openweathermap.org/data/2.5/weather?q=Afghanistan&appid=ba0f0460ac6b50a0197e077fcb3da29c`;
fetch(url)
.then(res=>res.json())
.then(data=>
{
// console.log(data);
// console.log(weather)
// const{main,description}=data.weather[0];
// climate.textContent=main;
alert('current weather in  Description:'+data.weather[0].description+' | Humidity:'+data.main.humidity+' | Temperature:'+data.main.temp+' | main weather:'+data.weather[0].main+' |  Wind Speed:'+data.wind.speed+'') 
})
}

function call1()
{
// const cityName=document.querySelector('.cityName');
// //const proxy="https://cors-anywhere.herokuapp.com/";
const url = `https://api.openweathermap.org/data/2.5/weather?q=Albania&appid=ba0f0460ac6b50a0197e077fcb3da29c`;
// //console.log(countryData[0].name)
fetch(url)
.then(res=>res.json())
.then(data=>
{
//     const{main,description}=data.weather[0];
// climateWeather.textContent=main;
alert('current weather in  Description:'+data.weather[0].description+' | Humidity:'+data.main.humidity+' | Temperature:'+data.main.temp+' | main weather:'+data.weather[0].main+' |  Wind Speed:'+data.wind.speed+'') 
//console.log(data);
})
//     // document.getElementById("btn btn=primary").innerHTML = html;
// })
}
    
function call2()
{
let climateMain=document.getElementById("climateMain")
// const cityName=document.querySelector('.cityName');
// //const proxy="https://cors-anywhere.herokuapp.com/";
const url = `https://api.openweathermap.org/data/2.5/weather?q=Algeria&appid=ba0f0460ac6b50a0197e077fcb3da29c`;
// //console.log(countryData[0].name)
fetch(url)
.then(res=>res.json())
.then(data=>
{
    //let object=data.weather[0]
    //console.log(object)
    console.log(data)
    //document.getElementById("climateMain").innerHTML = obj.main;
    alert('current weather in  Description:'+data.weather[0].description+' | Humidity:'+data.main.humidity+' | Temperature:'+data.main.temp+' | main weather:'+data.weather[0].main+' |  Wind Speed:'+data.wind.speed+'')    // const{main,description}=data.weather[0];
    // climateMain.textContent=main;
//console.log(data);
})
//     // document.getElementById("btn btn=primary").innerHTML = html;
// })
}


