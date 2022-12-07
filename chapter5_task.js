        // Question no # 1
        var a = parseInt(prompt("ENTER FIRST VALUE"));
        var b = parseInt(prompt("ENTER SECOND VALUE"));
        var z = a+b;
        document.write("Sum of "+a+" and "+b+" is "+z);

        // Question no # 2
        var a = parseInt(prompt("ENTER FIRST VALUE"));
        var b = parseInt(prompt("ENTER SECOND VALUE"));
        var _add = a+b;
        var _sub = a-b;
        var _mul = a*b;
        var _div = a/b;
        var _mod = a%b;
        document.write("Sum of "+a+" and "+b+" is "+ _add + "<br/>");
        document.write("Subtraction of "+a+" and "+b+" is "+ _sub + "<br/>");
        document.write("Multiplication of "+a+" and "+b+" is "+ _mul + "<br/>");
        document.write("Division of "+a+" and "+b+" is "+ _div + "<br/>");
        document.write("Modulus of "+a+" and "+b+" is "+ _mod + "<br/>");

        // Question no # 3
        var a;
        document.write("value after declaration is"+a+"<br/>");
        a  = 5;
        document.write("Initial value:"+ a +"<br/>");
        a++;
        document.write("value after increment is :"+ a +"<br/>");
        a = a+7;
        document.write("value after addition is  is :"+ a +"<br/>");
        a--;
        document.write("Reminder is  :"+ a +"<br/>");
        a%3;

        // Question no # 4
        var ticketcost = 600;
        var ticketqty =  5 ;
        var totalcost = ticketcost*ticketqty;
        document.write("Total Cost to buy " +"<b>"+ ticketqty +"</b>"+ " tickets to a movie is "+"<b>"+ totalcost +"</b>"+ " PKR")

        // Question no # 5

        var tableof = parseInt(prompt("TYPE A NUM TO PRINT A TABLE"));
        document.write(tableof+ "x 1 ="+tableof*1+"</br>");
        document.write(tableof+ "x 2 ="+tableof*2+"</br>");
        document.write(tableof+ "x 3 ="+tableof*3+"</br>");
        document.write(tableof+ "x 4 ="+tableof*4+"</br>");
        document.write(tableof+ "x 5 ="+tableof*5+"</br>");
        document.write(tableof+ "x 6 ="+tableof*6+"</br>");
        document.write(tableof+ "x 7 ="+tableof*7+"</br>");
        document.write(tableof+ "x 8 ="+tableof*8+"</br>");
        document.write(tableof+ "x 9 ="+tableof*9+"</br>");
        document.write(tableof+ "x 10 ="+tableof*10+"</br>");

        // Question no # 6

        var tempInCen = 39;
        var tempInFar = 105;

        var FarToCen = (tempInCen*9/5)+32
        var CenToFar = (tempInFar-32)*5/9;

        document.write(tempInCen+"<sup>o</sup>"+CenToFar.toFixed(1)+"<sup>o</sup>F")
        document.write("<br/>");
        document.write(tempInFar+"<sup>o</sup>"+FarToCen.toFixed(1)+"<sup>o</sup>C")

        // Question no # 7
        document.write("<h1> SHOPPING CART</h1>");
        var item1pri = 650;
        var item2pri = 100;
        var item1qty = 3;
        var item2qty = 7;
        var shipchar  = 100;
        var TotalBILL = ((item1pri*item1qty)+(item2pri*item2qty)+shipchar)

        document.write("Price of Item 1 is : "+ item1pri)
        document.write("<br/>");
        document.write("Quantity of Item 1 is : "+ item1qty)
        document.write("<br/>");
        document.write("Price of Item 2 is : "+ item2pri)
        document.write("<br/>");
        document.write("Quantity of Item 2 is : "+ item2qty)
        document.write("<br/>");
        document.write("Shipping Charges :"+shipchar)
        document.write("<br/>");
        document.write("Total Cost Of Your Order is :"+TotalBILL)

        // Question no # 8
        var marktotal = 750 ;
        var markobt = 450 ;
        var per = (marktotal/markobt)*100
        document.write("<h1>Marks Sheet</h1>")
        document.write("PERCENTAGE :"+ per);

        // Question no # 9
        var dollars = 30;
                var riyal = 30;
                var dollarToPkr = 30*221.55;
                var riyalToPkr = 25*58.90;
                var totalCurrency = dollarToPkr+riyalToPkr;
                document.write("<h1>Currency in PKR</h1>");
                document.write("Total Currency in PKR : "+totalCurrency.toFixed());

        // Question no # 10

        var a = 20;
        a = ((a+5)*10)/2;
        document.write(a);

        // Question no # 11

        document.write("<h1>Age Claculator</h1>");

        var curryear = 2022;
        var birthyear = 2003;
        var age1 = (curryear-birthyear);
        var age2 = (curryear-birthyear)-1;

        document.write("Current Year : " +curryear);
        document.write("<br/>");
        document.write("Birth Year "+birthyear);
        document.write("<br/>");
        document.write("Your Age Is :" + age1 +" or "+ age2);

        // Question no # 12
        var r = 20;
        var n = 3.142;
        var c = (2 * n) * r;
        var a = n * r ** 2;
        document.write("<h1>The Geametrizer</h1>");
        document.write("Radius of a circle : " + r + "<br/>");
        document.write("The Circumference is :"+c+"<br/>")
        document.write("The Area is : "+a+"<br/>")

        // Question no # 13
        var favSnack = "pizza";
        var myAge = 19;
        var maxAge = 60;
        var perDay = 1;
        var estSnacks = (maxAge-myAge)*perDay;
        document.write("Favourite Snack : "+favSnack+"<br/>");
        document.write("Current Age : "+myAge+"<br/>");
        document.write("Estimated Maximum age : "+maxAge+"<br/>");
        document.write("Amount of snacks per day : "+perDay+"<br/>");
        document.write("You will need "+estSnacks+" "+favSnack+" to last you until the ripe old age of "+maxAge);





