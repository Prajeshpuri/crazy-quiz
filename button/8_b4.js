function b4(){

        var tf1,tf2,tf3,tf4,tf5;
        tf1  = document.getElementById("tf1").value;
        tf2  = document.getElementById("tf2").value;
        tf3  = document.getElementById("tf3").value;
        tf4  = document.getElementById("tf4").value;
        tf5  = document.getElementById("tf5").value;
        
        if(tf1 == "")
            document.getElementById("tf1").value=("Y");
        else if(tf2 == "")
            document.getElementById("tf2").value=("Y");
        else if(tf3 == "")
            document.getElementById("tf3").value=("Y");
        else if(tf4 == "")
            document.getElementById("tf4").value=("Y");
        else if(tf5 == "")
            document.getElementById("tf5").value=("Y");

     document.getElementById("b4").style.visibility="hidden";
    }
        