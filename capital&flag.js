//  c. Print the following details name, capital, flag, using forEach function

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send()
request.onload = function(){
    var data = JSON.parse(request.response)
    let key = Object.keys(data)
    key.forEach((val) => {
        console.log("capital:",data[val].name.common)
        console.log("flag:",data[val].flag)
        console.log("image:",data[val].flags.png)
    })
}