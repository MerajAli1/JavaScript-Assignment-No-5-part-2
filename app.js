// var firstname=document.getElementById("name")
// var firstname=document.getElementById("empty")
// var a=[]
// function f_name(){
//     var b = firstname.value
//     console.log(b)
//     if(b==""){
//         empty.value="Enter Your First Name"
//     }
//     else{
//         a.push(b)
//         console.log(a)
//     }
// }
function form(){
     var firstname = document.getElementById("f_name").value
     var lastname = document.getElementById("l_name").value
     var password= document.getElementById("password").value
     var e_mail= document.getElementById("email").value
     var mob= document.getElementById("moble").value
     var nic_no= document.getElementById("nic").value

     document.writeln("My Personal Info: <br>"+"First Name: "+firstname+"<br>")
     document.writeln("Last Name: "+lastname+"<br>")
     document.writeln("Password: "+password+"<br>")
     document.writeln("Email Address: "+e_mail+"<br>")
     document.writeln("Mobile Number: "+mob+"<br>")
     document.writeln("CNIC Number: "+nic_no+"<br>")
}
