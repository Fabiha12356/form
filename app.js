const supabaseUrl = "https://wmflitippmldqpfvxixt.supabase.co";
const supabaseKey = "sb_publishable_0VvRE72u8ZALMxvFXcuC5w_vAFO97BS";


const { createClient } = supabase;
const client = createClient(supabaseUrl, supabaseKey);


//buttons:-
let loginbtn = document.querySelector("#loginbtn");
let signupbtn = document.querySelector("#signupbtn")



 loginbtn && loginbtn.addEventListener("click" , () =>{
    // console.log("ok");
    window.location.href = "./login.html"
})
 signupbtn && signupbtn.addEventListener("click" , () =>{
    // console.log("ok");
    window.location.href = "./index.html"
})


let userInfo;
let userDta;

// form:-

let form = document.querySelector("#form-valid");
let inputs = document.querySelectorAll("input");

//loginwork;-

let logAccount = document.querySelector("#btn");
let logInemail = document.querySelector("#login-email");
let logInpass = document.querySelector("#login-pass");
let logIndob = document.querySelector("#login-dob");


if(window.location.pathname.endsWith("/index.html")){
 form && form.addEventListener("submit", async(e)=>{
e.preventDefault();
 userDta =  new FormData(form)
  userInfo = Object.fromEntries(userDta);



// supabase insert
const { error } = await client
  .from('Users-data')
  .insert({
     "name" : userInfo.Username,
    "course" : userInfo.course,
    "gender" : userInfo.gender,
   })
   //sweets alerts:-
if(userInfo){
    Swal.fire({
  title: "SignUp!",
  icon: "success",
  draggable: true
});
}
//Auth ;-
const { data, error:usererror } = await client.auth.signUp({
  "email": userInfo.emailid,
  "password": userInfo.password,
})
inputs.forEach((input)=>{
    input.value = "";
})
})
console.log(userInfo);
}
// else if(window.location.pathname.endsWith("/login.html")){
//     console.log("okkkk")
// logAccount && logAccount.addEventListener("click",async(e)=>{
//     e.preventDefault();
//          const email = logInemail.value.trim();
//         const password = logInpass.value;

//     console.log("okkkkk!");
//     const { data, error } = await client.auth.signInWithPassword({
//   email: email,
//   password: password,
// })

// console.log(logInemail.value);
// console.log(logInpass.value);
//    console.log("DATA:", data);
//     console.log("ERROR:", error);
// })

// }
else{
    console.log("okkkk")
}



// logAccount && logAccount.addEventListener("click",async(e)=>{
//     e.preventDefault();
//     console.log("okkkkk!");
//     const { data, error } = await client.auth.signInWithPassword({
//   "email": logInemail.value,
//   "password": logInpass.value,
// })

// console.log(logInemail.value);
// console.log(logInpass.value);
//    console.log("DATA:", data);
//     console.log("ERROR:", error);
// })



//enrolled:-
let enrolBtn = document.querySelector("#button");

enrolBtn && enrolBtn.addEventListener("click",() =>{
    console.log("ok");
    window.location.href = "/enrolled.html";
})


