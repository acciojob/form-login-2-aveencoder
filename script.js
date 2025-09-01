//your JS code here. If required.
 function submitForm() {
      const form = document.getElementById('formLogin2');

      // Extract values using name attributes
      const firstName = form.elements['First Name'].value;
      const lastName = form.elements['Last Name'].value;
      const phone = form.elements['Phone Number'].value;
      const email = form.elements['Email ID'].value;

      // Construct alert text with proper spacing
      const alertText = 
        'First Name: ' + firstName + ' ' +
        'Last Name: ' + lastName + ' ' +
        'Phone Number: ' + phone + ' ' +
        'Email ID: ' + email;

      // Display the composed alert
      alert(alertText);
    }
