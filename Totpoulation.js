// d. Print the total population of countries using reduce function


var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send()
request.onload = function(){
    var data = JSON.parse(request.response)
    var pop = data.map(e=>e.population)
    var totpop = pop.reduce((a,c)=> a+c)
    console.log(totpop);

}