const request = require("request")

const forecast = (  lat , lon , cb)=>{
    const url = `https://api.weatherapi.com/v1/current.json?key=b0610b7a90fb417794830316231105&q=${lat},${lon}`;
request({url , json:true } , (err , res)=>{
    if(err){
        cb("Error -- can't reach data" , null);
    }
    else if(res.body.error){
        cb(res.body.error.message , null)
    }
    else{
        cb(null , res.body.location.name);
    }
})
}

const weatherApi =(address , cb)=>{
const geturl = `http://api.weatherstack.com/current?access_key=515a716970a4588e1baf084b6212701c&query=${address}`;
request({url : geturl , json : true} , (err , res)=>{
    if(err){
        cb("Error in api link or check your connection" , null)
    }
    else if(res.body.error){
        cb( res.body.error.type , null)
    }
    else{
        cb(null , `${res.body.request.query} -- temp is ${res.body.current.temperature}` )
    }
})
}
module.exports = {
    forecast : forecast,
    weatherApi : weatherApi
}