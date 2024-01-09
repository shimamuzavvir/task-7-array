//    a. Get all the countries from Asia continent /region using Filter function


var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send()
request.onload = function(){
    var data = JSON.parse(request.response)
    let asiancountries = data.filter(e=>e.region === "Asia")
    console.log(asiancountries);
    let asiacontinents = data.filter(ele=>ele.continents =="Asia")
    console.log(asiacontinents);

    // if you want only name of the countries of asia region
    let asia = asiancountries.map(a=>a.name)
    console.log(asia);
    
    // only name of countries of asia continents
   
    let continent = asiacontinents.map(c=>c.name)
    console.log(continent);
}
    