const getBtn = document.getElementById('getBtn');
const get404Btn = document.getElementById('get404Btn');
const get200Btn = document.getElementById('get200Btn');
const postBtn = document.getElementById('postBtn');

function httpRequest(metodo,url, data){
    const xhr = new XMLHttpRequest();
    xhr.open(metodo,url);

    xhr.onload = function() {
        var responseData = xhr.response();
        console.log(responseData);
    }
    xhr.send();
}


function getData(){
    httpRequest('GET','https://reqres.in/api/users?page=2');
}

function get200(){
    httpRequest('GET','https://reqres.in/api/users/23');
}
function get404(){
    httpRequest('GET','https://reqres.in/api/users/12');
}
function postData(){
    httpRequest('GET','https://reqres.in/api/users')({
        name: "morpheus",
        job: "leader"
    })
}


getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', postData);
get200Btn.addEventListener('click',get200);
get404Btn.addEventListener('click',get404);
