    function b12(){

        var tf1,tf2,tf3,tf4,tf5,tf6,
        tf1  = document.getElementById("tf1").value;
        tf2  = document.getElementById("tf2").value;
        tf3  = document.getElementById("tf3").value;
        tf4  = document.getElementById("tf4").value;
        tf5  = document.getElementById("tf5").value;
        tf6  = document.getElementById("tf6").value;
        tf7  = document.getElementById("tf7").value;
              
             if(tf1 == "")
            document.getElementById("tf1").value=("I");
        else if(tf2 == "")
            document.getElementById("tf2").value=("I");
        else if(tf3 == "")
            document.getElementById("tf3").value=("I");
        else if(tf4 == "")
            document.getElementById("tf4").value=("I");
        else if(tf5 == "")
            document.getElementById("tf5").value=("I");
        else if(tf6 == "")
            document.getElementById("tf6").value=("I");
        else if(tf7 == "")
            document.getElementById("tf7").value=("I");
       
        document.getElementById("b12").style.visibility="hidden";
    }