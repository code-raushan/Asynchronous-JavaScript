const getTodos = (resource)=>{
    return new Promise((resolve, reject)=>{
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', ()=>{
            if(request.readyState === 4 && request.status===200){
                const data = JSON.parse(request.responseText);
                resolve(data)
            }else if(request.readyState===4){
                reject('error getting the resource')
            }
        });
        request.open('GET', resource);
        request.send();
    });
};
todoList = ['todos/biographies.json', 'todos/books.json', 'todos/novels.json'];
for(let i=0; i<todoList.length; i++){
    getTodos(todoList[i]).then((data)=>{
        console.log(data);
    }).catch((err)=>console.log(err));
};
