    function b2(){

        var tf1,tf2,tf3,tf4,tf5;
        tf1  = document.getElementById("tf1").value;
        tf2  = document.getElementById("tf2").value;
        tf3  = document.getElementById("tf3").value;
        tf4  = document.getElementById("tf4").value;
        tf5  = document.getElementById("tf5").value;
        
             if(tf1 == "")
            document.getElementById("tf1").value=("E");
        else if(tf2 == "")
            document.getElementById("tf2").value=("E");
        else if(tf3 == "")
            document.getElementById("tf3").value=("E");
        else if(tf4 == "")
            document.getElementById("tf4").value=("E");
        else if(tf5 == "")
            document.getElementById("tf5").value=("E");
        
        document.getElementById("b2").style.visibility="hidden";
    }