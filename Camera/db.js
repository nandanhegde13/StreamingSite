let db;
let openRequest = indexedDB.open("myDataBase");

openRequest.addEventListener("success",(e)=>{
console.log("Db success");
db = openRequest.result;
})

openRequest.addEventListener("error",(e)=>{
    console.log("DB error");

})


openRequest.addEventListener("upgradeneeded",(e)=>{
    console.log("DB upgradeneeded");
    db = openRequest.result;
    db.createObjectStore("video",{keyPath:"id"});
    db.createObjectStore("image",{keyPath:"id"});
})
