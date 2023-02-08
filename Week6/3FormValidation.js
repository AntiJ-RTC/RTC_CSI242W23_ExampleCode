//Create the fields
let form;
let userName;
let email;
let password;
let password2;

//Use my load event like a constructor
window.addEventListener('load', function(){
    //assign our fields
    form = this.document.getElementById('signup-form');
    userName = this.document.getElementById('username');
    email = this.document.getElementById('email');
    password = this.document.getElementById('password');
    password2 = this.document.getElementById('password2');
    //check your references, make sure you got the element you wanted

    //listen for the form to be submitted
    form.addEventListener('submit', validateForm)
});

function validateForm(event){
    console.log(event);
    //Call a method called preventDefault()
    event.preventDefault();
    //first lets check that all of the inputs have a value
    //lets make a method for that
    checkRequired([userName, email, password, password2]);
}

function checkRequired(inputArray){
    //go through the array and see if any are empty
    inputArray.forEach(input => {
        //if the input is empty
        if(input.value === ''){
            //show the error message and make the small appear
            showError(input, `${input.id} is required, cannot be blank`);
        }
        else{
            //show success
            showSuccess(input);
        }
    });
}

function showError(input, message){
    //get the container dice class form control
    //parentElement
    let formControl = input.parentElement;
    //get the small element inside of the container
    let small = formControl.querySelector('small');
    //display the error message
    formControl.className = 'form-control error';
    small.innerHTML = message;
}

function showSuccess(input){
    let formControl = input.parentElement;
    formControl.className = 'form-control success'
}
//as an exercise try to create a method that checks that the
//userName is between 5and 20 c