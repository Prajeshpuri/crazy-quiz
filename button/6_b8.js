    function b8(){

        var tf1,tf2,tf3,tf4,tf5,tf6,
        tf1  = document.getElementById("tf1").value;
        tf2  = document.getElementById("tf2").value;
        tf3  = document.getElementById("tf3").value;
        tf4  = document.getElementById("tf4").value;
        tf5  = document.getElementById("tf5").value;
        tf6  = document.getElementById("tf6").value;
        tf7  = document.getElementById("tf7").value;
              
             if(tf1 == "")
            document.getElementById("tf1").value=("T");
        else if(tf2 == "")
            document.getElementById("tf2").value=("T");
        else if(tf3 == "")
            document.getElementById("tf3").value=("T");
        else if(tf4 == "")
            document.getElementById("tf4").value=("T");
        else if(tf5 == "")
            document.getElementById("tf5").value=("T");
        else if(tf6 == "")
            document.getElementById("tf6").value=("T");
        else if(tf7 == "")
            document.getElementById("tf7").value=("T");
       
        document.getElementById("b8").style.visibility="hidden";
    }