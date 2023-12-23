const businessIdField = document.getElementById("business-id");

// Generate a random number between 1 and 100000
const randomId = Math.floor(Math.random() * 100000) + 1;

// Set the value of the business id input field to the generated random number
businessIdField.value = randomId;

  document.getElementById("vendor-form").addEventListener("submit", function(event){
    event.preventDefault(); // prevent the form from submitting

    // display the alert message
    alert("Thank you for submitting. Please wait for our response.");

    // optionally, you can clear the form inputs
    document.getElementById("vendor-form").reset();
  });



 



 
