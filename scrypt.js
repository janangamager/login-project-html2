let signupbtn = document.getElementById("signup-btn")
let signinbtn = document.getElementById('signin-btn')
let  title = document.getElementById("title")
let namefield = document.getElementById("namefield")
let placeholderOne = document.getElementById("placeholder-one")
let placeholderTwo = document.getElementById("placeholder-two")
let placeholderThee = document.getElementById("placeholder-three")
let formBox = document.querySelector(" .form-box")
const para = document.querySelector(".para")
 let link = document.getElementById("link")







 signinbtn.addEventListener("click",function(e){
   console.log(e)
    title.innerHTML = "Sign In"
    title.style.color = "white"
    namefield.style.maxHeight = "0";
signinbtn.style.background = "#3c00a0"
 signinbtn.style.color = "white"
 signupbtn.style.background = "#555";
 signupbtn.style.color = "black"
 formBox.style.background = "rgba(0, 0, 0, 0.445)"
 
 para.style.color = "white"
 link.style.color = "red"
 
 

 });
 
 signupbtn.addEventListener("click",function(e){
    title.innerHTML = "Sign Up"
    title.style.color =""
    namefield.style.maxHeight = "65px";
 signupbtn.style.background = "#3c00a0"
 signinbtn.style.color = "black"
 signupbtn.style.color = "white"
 signinbtn.style.background = ("#555")
 formBox.style.background = "whitesmoke"
 para.style.removeProperty ("color")
 link.style.removeProperty("color")
 


 })

 
 placeholderOne.addEventListener("click",function(e){
   placeholderOne.style.background =" rgb(141, 233, 118"
   placeholderTwo. style.background = ""
   placeholderThee.style.background =""
   alert("you must fill in your name")
   
   


 });
 placeholderTwo.addEventListener("click",function(e){
placeholderTwo.style.background = "rgb(141, 233, 118"
placeholderOne.style.removeProperty("background")
placeholderThee.style.background = ""
alert("add your email")
 });
 placeholderThee.addEventListener("click",function(e){
   placeholderThee.style.background = "rgb(141, 233, 118  "
   placeholderTwo.style.removeProperty("background")
placeholderOne.style.background = ""

alert("pasword must be more than 12 characters")
 })
 