// form-valid

let form = document.querySelector("#form-valid");
console.log(form);



form.addEventListener("submit", (e)=>{
e.preventDefault();
console.log("okk");
let userDta =  new FormData(form)
console.log(userDta);
let userInfo = Object.fromEntries(userDta);
console.log(userInfo);
})


// console.log(new FormData());