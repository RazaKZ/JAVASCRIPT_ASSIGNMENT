
        // Question no # 1
         var  input = prompt("Input Single Character Or Single Number");
        var  ascii =  input.charCodeAt(0);
        if ( ascii >= 97 &&  ascii <= 122) {
            document.write("Small Alphabet");
        }
        else if ( ascii >= 65 &&  ascii <= 90) {
            document.write("Capital Alphabet");
        }
        else if ( ascii >= 48 &&  ascii <= 57) {
            document.write("Number");
        }
        // Question no # 2
        var  num1 = parseInt(prompt("Enter first NUmber : "));
        var  num2 = parseInt(prompt("Enter second Number : "));
        if( num1 >  num2){
            document.write( num1);
        }else if ( num1 <  num2){
            document.write( num2);
        }else if ( num1 ==  num2){
            document.write("Equal");
        }else{
            document.write("invalid input.")
        }

        // Question no # 3
        var inputnum = parseInt(prompt("Enter a value"));
        if(inputnum > 0){
            document.write("Positive");
        }else if(inputnum < 0){
            document.write("Negative");
        }else{
            document.write("ZERO");
        }

        // Question no # 4
        var inp = prompt("Enter a character : ").toLowerCase();
        if(inp.length > 1){
            document.write("Invalid input");
        }else if(inp == 'a' ||inp == 'e' || inp == 'i' || inp == 'o' || inp == 'u' ){
            document.write(true);
        }else{
            document.write(false)
        }
        
        // Question no # 5
        var sahipass = 'sahi he';
        var passinp = prompt("Enter password :");
        if(passinp == ''||passinp == null || passinp == undefined){
            document.write("Please enter your password");
        }else if(passinp == sahipass) {
            document.write("Correct!");
        }else{
            document.write("Incorrect password");
        }

        // Question no # 6
        var GREETING;
        var HR = 13;
        if (HR < 18) {
            GREETING = "Good day";

            GREETING = "Good evening";
        }

        var GREETING;
        var HR = 13;
        if (HR < 18) {
            GREETING = "Good day";
            document.write(GREETING);
        }else{
            GREETING = "Good evening";
            document.write(GREETING);
        }
        
        // Question no # 7
        var waqt = parseInt(prompt("Enter waqt in 24 Hr between 0000 and 23 59"));
        if(waqt >= 0000 && waqt < 1200){
            document.write("Good Morning.");
        }else if(waqt >= 1200 && waqt < 1700){
            document.write("Good Afternoon.");
        }else if(waqt >= 1700 && waqt < 2100){
            document.write("Good Evening.");
        }else if(waqt >= 2100 && waqt < 2359){
            document.write("Good Night.");
        }else{
            document.write("Invalid Input.");
        }
        





    