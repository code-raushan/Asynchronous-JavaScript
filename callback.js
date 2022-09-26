const getTodos = (resource, callback)=>{ //callback is a reference to the function callback()
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', ()=>{
        if(request.readyState===4&&request.status===200){
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        }else if(request.status===4){
            callback('could not fetch the data', undefined);
        }
    });
    request.open('GET', resource);//defining the operation on resource
    request.send();//sending the HTTP request

}
getTodos('todos/biographies.json', (err, data)=>{
    console.log(data);
    getTodos('todos/books.json', (err, data)=>{
        console.log(data);
        getTodos('todos/novels.json', (err, data)=>{
            console.log(data);
        })
    })
}); //This piece of code is an example of Callback Hell