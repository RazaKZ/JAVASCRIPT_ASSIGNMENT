        // question no # 1
        var arr0 = [];

        // question no #2
        var arr1 = new Array(100);

        // question no # 3
        var strarr = ["a","b","c","d"];

        // question no # 4
        var numarr = [44,22,35,46,90];

        // question no #5
        var bolarr = [true,false];

        // question no #6
        var mixArray = ["mango","football",33,50,true,"mouse",45,true];

        // question no #  7

        var EDUCATION = ['SSC','HSC','BCS','BS','BSIT','MS','PhD'];
        for(i in EDUCATION){
            document.write(`<b> ${parseInt(i)+1} ) $ {EDUCATION[i]} <b> <br/>`)
        }
        // question no #  8
        var students = ['asad', 'anas', 'rahul'];
        var score = [550, 250, 350];
        for(i in students){
            document.write(`Score of ${students[i]} is ${score[i]}. Percentage: ${score[i]/500*100}% <br/>`)
        }
        // question no #  9
        var colors = ['white','yellow','blue'];
        document.write("Array after first initialization : ",colors);

        // question no # 10
        var stuscr =[250,340,555,200];
        document.write(`Scores of Students : ${stuscr} <br/>`);
        var scrSorted = stuscr.sort();
        document.write(`Ordered Scores of Students : ${scoreSorted}`);

        // question no #  11

        var cityname = ['karachi','islamabad','lahore','sukkur'];
        document.write(`City's list : <br/>${cityname}<br/> <br/>`);
        var selectedCities = cityname.slice(2,4);
        document.write(`Selected city's list : <br/>${selectedCities}`);

        // question no #  12
        var array = ['this','is','my','cat'];
        document.write('Array : <br/>',arr);
        var arrToStr = arr.join();
        document.write('<br/> String : <br/>',arrToStr);

        // question no # 13
        var arr = ['scanner','fax','printer','lcd'];
        document.write("Devices : <br/> ",arr,"<br/> <br/> FIFO <br/> <br/>")
        document.write(`Out : <br/> ${arr[0]} <br/> Out : <br/> ${arr[1]} <br/> Out : <br/> ${arr[2]} <br/> Out : <br/> ${arr[3]} <br/>`)

        

    