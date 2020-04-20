function b10(){

        var tf1,tf2,tf3,tf4,tf5;
        tf1  = document.getElementById("tf1").value;
        tf2  = document.getElementById("tf2").value;
        tf3  = document.getElementById("tf3").value;
        tf4  = document.getElementById("tf4").value;
        tf5  = document.getElementById("tf5").value;
        
        if(tf1 == "")
            document.getElementById("tf1").value=("X");
        else if(tf2 == "")
            document.getElementById("tf2").value=("X");
        else if(tf3 == "")
            document.getElementById("tf3").value=("X");
        else if(tf4 == "")
            document.getElementById("tf4").value=("X");
        else if(tf5 == "")
            document.getElementById("tf5").value=("X");

     document.getElementById("b10").style.visibility="hidden";
    }
        