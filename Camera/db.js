let db;
let openRequest = indexedDB.open("myDataBase");

openRequest.addEventListener("success",(e)=>{

})

openRequest.addEventListener("error",(e)=>{
    console.log("DB error");

})


openRequest.addEventListener("upgradeneeded",(e)=>{
    console.log("DB upgradeneeded");
})