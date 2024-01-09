// e.  Print the country that uses US dollars as currency

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send()
request.onload = function(){
    var data = JSON.parse(request.response)
    let sum = 0
    data.forEach(element => {
        if(element?.currencies?.hasOwnProperty("USD")){
            console.log(++sum , element.name.common);
        }
        
    });
}

    