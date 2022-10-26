console.log("Connected!!")
// alert('Hello')
const showAlert = () =>{
    const num = Math.random() * 10;
    console.log(num);
    if(num < 5){
        alert('Hello')
    }
}

const askSomething = ()=>{
    const decision = confirm("Are you coming to the picnic?");
    console.log(decision);
    if(decision == true){
        alert("Please bKash 500/-")
    }
    else{
        alert("DGM !!")
    }
}

const getUserInfo = () =>{
    const name = prompt("Tell us your name : ");
    console.log(name);
    if(!! name){
        console.log("Welcome here", name)
    }
}