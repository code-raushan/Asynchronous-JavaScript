const getTodos = (resource, callback)=>{
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', ()=>{
        if(request.readyState===4&& request.status===200){
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        }else if(request.readyState===4){
            callback('data could not be found ', undefined);
        }
    });
    request.open('GET', resource);
    request.send();
};
//promise example
// isNaN is used just for demonstration purposes and to not intervene in the actual code flow
if(isNaN(55)){
    const getSomething = ()=>{

        return new Promise((resolve, reject)=>{ //creates an new promise that can either give resolution or rejection.
            //fetch something
            // resolve('some data');
            reject('some error')
        })
    };
    getSomething().then((data)=>{
        console.log(data);
    }, (err)=>{
        console.log(err);
    });
    //Clean way to write above code
    getSomething().then(data=>{
        console.log(data);
    }).catch(err=>{
        console.log(err);
    });
};


