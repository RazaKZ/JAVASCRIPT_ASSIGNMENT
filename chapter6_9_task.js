
        // Question no # 1
        var a = 10;
        document.write("Result : "+"<br/>");
        document.write("The value of (a) is :"+a+"<br/>");
        document.write("..................................... <br/>"+"<br/>");

        document.write("The value of ++a is : "+ ++a +"<br/>");
        document.write("Now the value of (a) is : "+a+"<br/>"+"<br/>");

        document.write("The value of a++ is : "+ a++ +"<br/>");
        document.write("Now the value of (a) is : "+a+"<br/>"+"<br/>");

        document.write("The value of --a is : "+ --a +"<br/>");
        document.write("Now the value of (a) is : "+a+"<br/>"+"<br/>");

        // Question no # 2
        var a = 2, b = 1;
        var result = --a - --b + ++b + b--;
        document.write("a is : "+a+"<br/>");
        document.write("b is : "+b+"<br/>");
        document.write("Result is : "+result)

        // Question no # 3
        var userName = prompt("Write your name");
        alert("Welcome to website "+userName);

        // Question no #  4 or 5
        var tableOf;
        console.log(tableOf);
        tableOf = prompt("Enter a number to print a table ", 5);
        if (tableOf == null || tableOf == undefined || tableOf == '') {
            tableOf = 5;
            document.write(tableOf + " x 1 = " + tableOf * 1 + "</br>");
            document.write(tableOf + " x 2 = " + tableOf * 2 + "</br>");
            document.write(tableOf + " x 3 = " + tableOf * 3 + "</br>");
            document.write(tableOf + " x 4 = " + tableOf * 4 + "</br>");
            document.write(tableOf + " x 5 = " + tableOf * 5 + "</br>");
            document.write(tableOf + " x 6 = " + tableOf * 6 + "</br>");
            document.write(tableOf + " x 7 = " + tableOf * 7 + "</br>");
            document.write(tableOf + " x 8 = " + tableOf * 8 + "</br>");
            document.write(tableOf + " x 9 = " + tableOf * 9 + "</br>");
            document.write(tableOf + " x 10 = " + tableOf * 10 + "</br>");
        } else {
            document.write(tableOf + " x 1 = " + tableOf * 1 + "</br>");
            document.write(tableOf + " x 2 = " + tableOf * 2 + "</br>");
            document.write(tableOf + " x 3 = " + tableOf * 3 + "</br>");
            document.write(tableOf + " x 4 = " + tableOf * 4 + "</br>");
            document.write(tableOf + " x 5 = " + tableOf * 5 + "</br>");
            document.write(tableOf + " x 6 = " + tableOf * 6 + "</br>");
            document.write(tableOf + " x 7 = " + tableOf * 7 + "</br>");
            document.write(tableOf + " x 8 = " + tableOf * 8 + "</br>");
            document.write(tableOf + " x 9 = " + tableOf * 9 + "</br>");
            document.write(tableOf + " x 10 = " + tableOf * 10 + "</br>");
        }
        // Question no # 6
        var sub_1 = prompt("Enter First subject name : ");
        var sub_2 = prompt("Enter Second subject name : ");
        var sub_3 = prompt("Enter Third subject name : ");

        var sub_1_max_marks = 150;
        var sub_2_max_marks = 150;
        var sub_3_max_marks = 150;

        var sub1 = parseInt(prompt("Enter marks Obtained for " + sub_1));
        var sub2 = parseInt(prompt("Enter marks Obtained for : " + sub_2));
        var sub3 = parseInt(prompt("Enter marks Obtained for: " + sub_3));

        var sub_1_per = (sub1 / sub_1_max_marks) * 100;
        var sub_2_per = (sub2 / sub_2_max_marks) * 100;
        var sub_3_per = (sub3 / sub_3_max_marks) * 100;

        var net_total_marks = (sub_1_max_marks + sub_2_max_marks + sub_3_max_marks);
        var net_total_obt = (sub1 + sub2 + sub3);
        var net_total_per = (sub_1_per + sub_2_per + sub_3_per);
        document.write("<table>");
        // Row
        document.write("<tr>");
        document.write("<td>");
        document.write("<b>Subject</b>");
        document.write("</td>");
        document.write("<td>");
        document.write("<b>Total Marks</b>");
        document.write("</td>");
        document.write("<td>");
        document.write("<b>Obtained Marks</b>");
        document.write("</td>");
        document.write("<td>");
        document.write("ُ<b>percentage</b>");
        document.write("</td>");
        document.write("</tr>");
        // Sub 1 Row
        document.write("<tr>");
        document.write("<td>");
        document.write(sub_1);
        document.write("</td>");
        document.write("<td>");
        document.write(sub_1_max_marks);
        document.write("</td>");
        document.write("<td>");
        document.write(sub1);
        document.write("</td>");
        document.write("<td>");
        document.write(sub_1_per + "%");
        document.write("</td>");
        document.write("</tr>");
        // Sub 2 row
        document.write("<tr>");
        document.write("<td>");
        document.write(sub_2);
        document.write("</td>");
        document.write("<td>");
        document.write(sub_2_max_marks);
        document.write("</td>");
        document.write("<td>");
        document.write(sub2);
        document.write("</td>");
        document.write("<td>");
        document.write(sub_2_per + "%");
        document.write("</td>");
        document.write("</tr>");
        // Sub 3 row
        document.write("<tr>");
        document.write("<td>");
        document.write(sub_3);
        document.write("</td>");
        document.write("<td>");
        document.write(sub_3_max_marks);
        document.write("</td>");
        document.write("<td>");
        document.write(sub3);
        document.write("</td>");
        document.write("<td>");
        document.write(sub_3_per + "%");
        document.write("</td>");
        document.write("</tr>");
        // Totals row
        document.write("<tr>");
        document.write("<td>");
        document.write("");
        document.write("</td>");
        document.write("<td>");
        document.write("<b>" + net_total_marks + "</b>");
        document.write("</td>");
        document.write("<td>");
        document.write("<b>" + net_total_obt + "</b>");
        document.write("</td>");
        document.write("<td>");
        document.write("<b>" + net_total_per + "%" + "</b>");
        document.write("</td>");
        document.write("</tr>");
        document.write("</table>");




