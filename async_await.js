//Async and Await methodology
//Async functions always return a promise
const getTodos = async()=>{
    const response = await fetch('todos/books.json'); //response is stalled till the promise is resolved
    // console.log(response);
    const data = await response.json();
    // console.log(data);
    return data;
    
}
const result = getTodos().then(data=>{ //only here, then is required as async func returns a promise
    console.log(data);
}).catch(err=>{
    console.log(err);
});
