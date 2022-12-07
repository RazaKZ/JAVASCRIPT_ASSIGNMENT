
        // Question no # 1
        var cityname = prompt("Enter City NAME").toLocaleLowerCase();
        if (cityname == "hyderabad"){
            alert("WELCOME TO THE CITY OF BIRDS ")
        }

        if (cityname == "karachi"){
            alert("WELCOME TO THE CITY OF LIGHTS ")
        }
        else{
            alert("WELCOME TO THE CITY ")
        }
         
        
        // Question no # 2
        var gender = prompt("Enter Your Gender").toLocaleLowerCase();
        if (gender == "male"){
            document.write("GOOD MORNING SIR");
        }
        else if(gender == "female" ){
            document.write("GOOD MORNING Ma'am");
        }
        else{
            document.write("Invalid Inpu");
        }

        // Question no # 3
        var currSignal = prompt("Enter traffic signal color : ").toLowerCase();
        if (currSignal == 'red') {
            alert("Must stop!");
        } else if (currSignal == 'yellow') {
            alert("Ready to move");
        } else if (currSignal == 'green') {
            alert("Move now");
        } else {
            alert("invalid input");
        }

        
// Question no # 4
        
        var Remainfuel = parseFloat(prompt("Enter fuel remaining : "));
        if (Remainfuel < 0.25) {
            alert("Please refill the fuel in your car ");
        } else {
            alert("Keep going");
        }

        // Question no # 5
        var a = 4;
        if (++a === 5){
            alert("Given Condition of variable a is true ")
        }

        var b = 89;
        if (b++ === 90) {
            alert("Given Condition of variable b is true ");
        }

        var b = 82;
        if (b++ === 83) {
            alert("given condition for variable b is true");
        }
        var c = 12;
        if (c++ === 13) {
            alert("condition 1 is true")
        }
        // false
        if (c === 13) {
            alert("condition 2 is true")
        }
        // true
        if (c === 14) {
            alert("condition 4 is true");
            // true
        }

        var matcost = 20000;
        var labcost = 2000;
        var totalCost = matcost + labcost;
        if (totalCost === labcost + matcost) {
            alert("The cost is equal");
        }

        if ("car" < "cat") {
            alert("car is smaller than cat");
        }

        var sub_1 = parseInt(prompt(" obtained Marks in first subject"));
        var sub_2 = parseInt(prompt(" obtained Marks in second subject"));
        var sub_3 = parseInt(prompt(" obtained Marks in third subject"));
        var max_marks = 300;
        var total_obt = (sub_1+sub_2) + sub_3 ;
        var obt_per = ((total_obt/max_marks)*100).toFixed(2);
        document.write("<h1>Marks Sheet</h1>");
        document.write("Total Marks :"+ max_marks +"<br/>");
        document.write("Marks Obtained :"+ total_obt +"<br/>");
        document.write("Percentage :"+ obt_per +"%"+"<br/>");
        if(obt_per >= 80){
            document.write("Grade : A-one"+"<br/>");
            document.write("Remarks : Excellent"+"<br/>");
        }else if(obt_per >= 70){
            document.write("Grade : A"+"<br/>");
            document.write("Remarks : Good"+"<br/>");
        }else if(obt_per >= 60){
            document.write("Grade : B"+"<br/>");
            document.write("Remarks : You need to improve"+"<br/>");
        }else if(obt_per < 60){
            document.write("Grade : Fail"+"<br/>");
            document.write("Remarks : Sorry"+"<br/>");
        }else{
            document.write("invalid input"+"<br/>");
        }


        // Question no # 7

        var ran_num =Math.random()*10;
        var guess  = random.tofixed();
        var user = parseInt(prompt("Guess a num between 1 TO 10 "));
        if (user == guess){
            document.write("HURRY ! correct ")
        }
        else if (user+1 == guess){
            document.write("close Enough")
        }
        else{
            document.write(" ^_^ WRONG ANSWER ^_^")
        }

        // Question no # 8
        var checkNum = parseInt(prompt("Enter Number : "));
        if (checkNum%3 == 0){
            document.write("Number is divisible by 3");
        }else{
            document.write("Number is not divisible by 3");
        }

        // Question no # 9
        var checkEven = parseInt(prompt("WRITE A Number : "));
        if (checkEven % 2 == 0) {
            document.write("Even");
        } else {
            document.write("Odd");
        }
        // Question no # 10
        var inpTemp = parseInt(prompt("Input temperature : "));
        if (inpTemp > 40){
            document.write("too hot outside.");
        }else if (inpTemp > 30){
            document.write("Normal Weather Today.");
        }else if (inpTemp > 20){
            document.write("Todays Weather is good for walk.");
        }else if (inpTemp > 10){
            document.write(" Today’s weather is so Cool . Stay Home ,Stay save ");
        }else{
            document.write("Please Enter A Correct Temprature");
        }

        // Question no # 11
        var firstNumber = parseInt(prompt("Enter First Number : "));
        var SecondNumber = parseInt(prompt("Enter Second Number : "));
        var operation = prompt("Enter Operator symbol Ex. '+','-','*','/','%' : ");
        if (operation == '+'){
            document.write(firstNumber+SecondNumber);
        }else if (operation == '-'){
            document.write(firstNumber-SecondNumber);
        }else if (operation == '*'){
            document.write(firstNumber*SecondNumber);
        }else if (operation == '/'){
            document.write(firstNumber/SecondNumber);
        }else if (operation == '%'){
            document.write(firstNumber%SecondNumber);
        }else{
            document.write("Invalid Input.")
        }



        


