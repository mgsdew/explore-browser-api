// localStorage.getItem('name');

document.getElementById('btnAdd').addEventListener('click',function(){

    const name = document.getElementById('name');
    const nameValue = name.value;
    console.log(nameValue);

    localStorage.setItem('name', nameValue);
})

document.getElementById('btnRemove').addEventListener('click', function(){

    localStorage.removeItem('name');
    localStorage.clear();
    console.log('name');
})

// document.getElementById("hellobutton").addEventListener("click", hello);

// function btnAdd(){
//     const name = document.getElementById('name');
//     const nameValue = name.value;
//     console.log(nameValue);

//     localStorage.setItem('name', nameValue);
// }

function btnRemove(){

    localStorage.removeItem('name');
    localStorage.clear();
    console.log('name');
}