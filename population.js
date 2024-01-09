// b.  Get all the countries with a population of less than 2 lakhs using Filter function

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send()
request.onload = function(){
    var data = JSON.parse(request.response)
    let population = data.filter(e=> e.population<200000)
    console.log(population);


    // print only name of countries which are less than 200000

    let name = population.map(e=>e.name.common)
    console.log(name);
}