function displayplansection(){
    // Find the element with the class name 'formcontainer'
    var formContainer = document.querySelector('.formcontainer');

    // Get the value of the name input
    var nameInput = document.querySelector('.nameinput').value;

     // Find the element with the class name 'errormessage'
     var errorMessage = document.querySelector('.errormessage');
    // Check if the name input is empty
    if (nameInput.trim() === '') {
        // Change the styling of the error message
        errorMessage.style.display = 'inline-block';
    }
    else{
        errorMessage.style.display = 'none';
    }

    // Get the value of the email input
    var emailInput = document.querySelector('.emailinput').value;

    // Find the element with the class name 'errormessage'
    var errorMessages = document.querySelectorAll('.errormessage');
    var secondErrorMessage = errorMessages[1];

    // Check if the name input is empty
    if (emailInput.trim() === '') {
        // Change the styling of the error message
        secondErrorMessage.style.display = 'inline-block';
    }
    else{
        // Change the styling of the error message
        secondErrorMessage.style.display = 'none';
    }

    // Get the value of the email input
    var phoneInput = document.querySelector('.phoneinput').value;

    // Find the element with the class name 'errormessage'
    var errorMessages = document.querySelectorAll('.errormessage');
    var thirdErrorMessage = errorMessages[2];

    // Check if the name input is empty
    if (phoneInput.trim() === '') {
        // Change the styling of the error message
        thirdErrorMessage.style.display = 'inline-block';
    }
    else{
        // Change the styling of the error message
        thirdErrorMessage.style.display = 'none';
        
    }
    if(nameInput.trim() != '' && emailInput.trim() != '' && phoneInput.trim() != ''){
        formContainer.style.display = 'none';
        var plansection = document.querySelector('.plansection');
        plansection.style.display = 'block';
    }
    
}