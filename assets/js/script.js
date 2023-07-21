document.getElementById("genPassword").addEventListener("click", function () {
    var length = prompt("From 8 to 128, please enter your desired character limit:");
    
    // if (invalid) { restart };
    if (length < 8 || length > 128 || isNaN(length) ) {
      alert("ALERT: Invalid character(s)");
      return;
    }
  
    // Character selections // Reference used: https://www.w3schools.com/jsref/met_win_confirm.asp
    var includeLowercase = confirm("Enable lowercase characters?");
    var includeUppercase = confirm("Enable uppercase characters?");
    var includeNumbers = confirm("Enable numbers?");
    var includeSpecial = confirm("Enable special characters?");
  
    // if (no characters selected) { restart };
    if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecial) {
      alert("ALERT: No characters enabled");
      return;
    }
  
    // Generate the password based on selected criteria
    var password = genPassword(length, includeLowercase, includeUppercase, includeNumbers, includeSpecial);
  
    // Display the password
    document.getElementById("password-display").value = password;
});

function genPassword(length, includeLowercase, includeUppercase, includeNumbers, includeSpecial) {
    var generatedpw = "";
    var lowerChars = "abcdefghijklmnopqrstuvwxyz";
    var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numberChars = "0123456789";
    var specialChars = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
  
    if (includeLowercase) {
        generatedpw += lowerChars;
    }
    if (includeUppercase) {
        generatedpw += upperChars;
    }
    if (includeNumbers) {
        generatedpw += numberChars;
    }
    if (includeSpecial) {
        generatedpw += specialChars;
    }

    var password = "";
    // Reference used: https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * generatedpw.length);
      password += generatedpw.charAt(randomIndex);
    }
    return password;
}
