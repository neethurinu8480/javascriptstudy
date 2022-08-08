/*  function display(){
   var name=document.getElementById("txtName").value;
   document.getElementById("h1dispaly").innerHTML=name;
  }   */
  function displayMessageLoad()
  {
    alert("Hii everybody...")
  }
  
  function display(){
    var firstName=document.getElementById("txtFirstName").value;
    var lastName=document.getElementById("txtLastName").value;

    var confm=confirm("Are you sure")
    if(confm){
        if(firstName=="" && lastName==""){
            alert("Your name field is empty...Please enter it");
        }else if(firstName=="" || lastName==""){
            alert("Your name field is empty...Please enter it");
        }else{
            alert("Successfully entered your name:" + firstName + " "+lastName)
        }             
    }else{
        alert("Your name field is empty...Please enter it");
    }
   /*var n =prompt("Enter your name",name);
   if(n==null){
    alert("Your name field is empty...Please enter it");
   }else{
    alert("successfully enterd the name " +n)
   }*/
    //alert("Successfully entered your name:" + firstName + " "+lastName)
    //document.getElementById("h1dispaly").innerHTML="Your name is "+firstName+" "+lastNam
   
  }
  function msgFirstNameMouseover(){
    //alert("hi");
    document.getElementById("txtFirstName").value="First Name" ;
}
function msgFirstNameMouseout(){
    document.getElementById("txtFirstName").value=null;
}


//Use message box images

function displayMsg(){
    let id=document.getElementById("imgMsgbox");
    let div= document.getElementById("divimg");
    if(document.getElementById("txtName").value==""){
        //alert("please enter name");
        //let hidden =id.getAttribute("hidden");
        id.removeAttribute("hidden");
        div.style.display="block";  
    }
    else{
        id.setAttribute("hidden","hidden");
    }
}


  