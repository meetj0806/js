let mydate=new Date();
// console.log("String -> ",mydate.toString());
// console.log("ISO -> ",mydate.toISOString());
// console.log("Date -> ",mydate.toDateString());
// console.log("Locale -> ",mydate.toLocaleString());

let myCreateDate=new Date(2003,5,8);
console.log(myCreateDate.toDateString())

let myTimestamp=Date.now();
// console.log(myTimestamp);
// console.log(myCreateDate.getTime());
console.log(Math.round(myTimestamp/1000));