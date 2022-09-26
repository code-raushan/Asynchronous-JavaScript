const getTodos = (resource)=>{
    return new Promise((resolve, reject)=>{
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', ()=>{
        if(request.readyState === 4 && request.status===200){
            const data = JSON.parse(request.responseText);
            resolve(data);
        }else if(request.readyState===4){
            reject('could not reach the resource')
        }
    });
    request.open('GET', resource);
    request.send()
});
}
getTodos('todos/biographies.json').then(data=>{
    console.log(data);
    return getTodos('todos/books.json').then(data=>{
        console.log(data);
        return getTodos('todos/novels.json').then(data=>{
            console.log(data);
        })
    })
}).catch(err=>{
    console.log(err);
});//promise chain