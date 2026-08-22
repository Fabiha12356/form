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



// form:-

let form = document.querySelector("#form-valid");
let loginForm=document.querySelector("#login-form");
let inputs = document.querySelectorAll("input");



 form && form.addEventListener("submit", async(e)=>{
e.preventDefault();
 let userDta =  new FormData(form)
 let  userInfo = Object.fromEntries(userDta);


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

console.log(loginForm)
loginForm && loginForm.addEventListener("click",async(e)=>{
    e.preventDefault();
    console.log("okkkk")
     let userDta =  new FormData(loginForm)
 let  userInfo = Object.fromEntries(userDta);
 console.log(userInfo);

 let{email,password,dob} = userInfo
 

 let flag = false
 inputs.forEach((input)=>{
    if(input.value === ""){
        console.log("hello");
        flag = true;
    }
 })
 if(flag){
return;
 }
 //database insert:-
 const { error } = await client
  .from('Users-data')
  .insert(
    dob,
  )
console.log(error);  //working:-
//login
 const { data, error:userError } = await client.auth.signInWithPassword({
  email,
   password,
})
console.log(data);
console.log(userError);
if(data){
    Swal.fire({
  title: "SignUp!",
  icon: "success",
  draggable: true
});
}
setTimeout(()=>{
    window.location.href = "./home.html";
},2000)

})









