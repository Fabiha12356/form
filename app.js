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

// console.log(loginForm)
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


//signout:-
let signoutBtn = document.querySelector("#button");



signoutBtn && signoutBtn.addEventListener("click",async()=>{
    if(signoutBtn.innerHTML === "SignOut !"){
console.log("okkkk");
const { error } = await client.auth.signOut()
if(error){
    console.log("okk");
}else{
    console.log("signout!");
    window.location.href = "./index.html"
}
    }else{
        return;
    }
})



//enrolledbtn:-

let enrolBtn=document.querySelector("#enrolBtn");
console.log(enrolBtn);


enrolBtn && enrolBtn.addEventListener("click",()=>{
console.log("okkkk");    
window.location.href = "./enrolled.html"
})

// if(window.lo)
if(window.location.pathname === "/enrolled.html"){
    console.log("okkkk");
    const store = async() =>{
        const { data, error } = await client
      .from('Users-data')
      .select()
      console.log(error);
      console.log(data);

      let selctivedata = data ;
      let div = document.querySelector("#print")
      selctivedata.forEach((info) =>{
        console.log(info.name);
        div.innerHTML += `  <div class="col-md-3 mb-3">
            <div class="card">
                <div class="card-body">
                    <h2 class="card-title">${info.name}</h2>
                    <p class="card-text">${info.gender}</p>
                    <button class="btn editBtn">Edit</button>
                    <button  class="btn dletBtn">Delete</button>
                </div>
            </div>
        </div>`   
})
             // edit and del
        let editBtn = document.querySelectorAll(".editBtn");
    let delBTn = document.querySelectorAll(".dletBtn");
    console.log(editBtn);
    console.log(delBTn);
  
editBtn.forEach((btn,index)=>{
    btn.addEventListener("click",async()=>{
    //sweets alerts 
      let student = data[index];

  const { value: formValues } = await Swal.fire({
  title: "Multiple inputs",
  html: `
    <input id="swal-input1" class="swal2-input" placeholder="Name" value="${student.name}">
    <input id="swal-input2" class="swal2-input" placeholder="Course" value="${student.gender}">
  `,
  focusConfirm: false,
  preConfirm: () => {
    return [document.getElementById("swal-input1").value,
       document.getElementById("swal-input2").value];
  }
}
);
console.log(formValues);

const updateDta ={
  name : formValues[0],
  gender: formValues[1],
}

const { error } = await client
  .from('Users-data')
  .update(updateDta)
  .eq('id', student.id);

  window.location.reload();

})
    
      })



       delBTn.forEach((btn,index)=>{
  btn.addEventListener("click", async (e)=>{
    e.preventDefault();
  let student = data[index];
  console.log(student.id);
  // deleted
  const response = await client
  .from('Users-data')
  .delete()
  .eq('id', student.id);
  window.location.reload();
  })
})


 
}
 store() 

}

