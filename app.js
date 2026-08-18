const supabaseUrl = "https://wmflitippmldqpfvxixt.supabase.co";
const supabaseKey = "sb_publishable_0VvRE72u8ZALMxvFXcuC5w_vAFO97BS";


const { createClient } = supabase;
const client = createClient(supabaseUrl, supabaseKey);

// form-valid

// let form = document.querySelector("#form-valid");
// console.log(form);



// form.addEventListener("submit", (e)=>{
// e.preventDefault();
// console.log("okk");
// let userDta =  new FormData(form)
// console.log(userDta);
// let userInfo = Object.fromEntries(userDta);
// console.log(userInfo);
// })


// console.log(new FormData());



let loginbtn = document.querySelector("#loginbtn");
let signupbtn = document.querySelector("#signupbtn")



 loginbtn && loginbtn.addEventListener("click" , () =>{
    console.log("ok");
    window.location.href = "./login.html"
})
 signupbtn && signupbtn.addEventListener("click" , () =>{
    console.log("ok");
    window.location.href = "./index.html"
})