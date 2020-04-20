    function b1(){

        var tf1,tf2,tf3,tf4,tf5,tf6,tf7,tf8,tf9;
        tf1  = document.getElementById("tf1").value;
        tf2  = document.getElementById("tf2").value;
        tf3  = document.getElementById("tf3").value;
        tf4  = document.getElementById("tf4").value;
        tf5  = document.getElementById("tf5").value;
        tf6  = document.getElementById("tf6").value;
       
        
             if(tf1 == "")
            document.getElementById("tf1").value=("S");
        else if(tf2 == "")
            document.getElementById("tf2").value=("S");
        else if(tf3 == "")
            document.getElementById("tf3").value=("S");
        else if(tf4 == "")
            document.getElementById("tf4").value=("S");
        else if(tf5 == "")
            document.getElementById("tf5").value=("S");
        else if(tf6 == "")
            document.getElementById("tf6").value=("S");
                
        document.getElementById("b1").style.visibility="hidden";
    }