  //DOM Form element 
const form = document.getElementById("_form");


// Input validation 
function onSubmit(e){
    //prevents data erasing
    e.preventDefault();

    //local storage for form fields.
    const fname = document.getElementById("first");
    localStorage.setItem("first", fname.value);

    const mname =document.getElementById("middle");
    localStorage.setItem("middle", mname.value);

    const lname = document.getElementById("last");
    localStorage.setItem("last", lname.value);

    const gender=document.getElementById("gender");
    localStorage.setItem("gender", gender.value);

    const phoneNumber=document.getElementById("phone");
    localStorage.setItem("phone", phoneNumber.value);

    const email = document.getElementById("email");
    localStorage.setItem("email", email.value);

    const address = document.getElementById("address");
    localStorage.setItem("address", address.value);
  
    //Regular expression or Regex for correct format.
    const name_format = /^[a-zA-Z].*[\s\.]*$/;
    const number_format = /1?-?\.?\(?\d{3}[\-\)\.\s]?\d{3}[\-\.\s]?\d{4}/;
    const email_format = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    //Checking format
    if(!name_format.test(fname.value)){
        alert("Enter first name");
        return false;
    }

    
    if(!name_format.test(lname.value)){
        alert("Enter last name");
        return false;
    }

    //Format Validation
    if(!number_format.test(phoneNumber.value)){
        alert("Enter a valid Phone Number");
        return false;
    }

    //Format Validation
    if(!email_format.test(email.value)){
        alert("Enter a valid email address.");
        return false;
    } 
    
    //go to cv page once inputs have been validated
    else{
        location.href = "CV.html";
    }
}

//adds an event listner to the form
form.addEventListener("submit", onSubmit);