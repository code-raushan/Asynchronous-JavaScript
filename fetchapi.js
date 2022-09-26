// Fetch API
//return a promise
//catch will only in network err scenario
fetch('todos/books.json').then(response=>{
    console.log('resolved',response);
    return response.json(); //parses the data
}).then(data=>{
    console.log(data);
}).catch(err=>{
    console.log(err);
});

//Much less code to write in comparison to the XMLHttpRequest to do the same job