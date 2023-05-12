const data = require('./data/data.js')

data.forecast(process.argv[2] , process.argv[3] , (err , res )=> {
    (err)? console.log("Err :" , err) : console.log("data 1 :", res);
   if(res){
    data.weatherApi( res , (err , res ) => {
        (err) ? console.log("Err :" , err) : console.log("data 2 :", res) }   
    )}
   else{
    console.log("error in your inputs")
   }
})