    function b10(){

        var tf1,tf2,tf3,tf4,tf5,tf6,tf7,tf8,tf9;
        tf1  = document.getElementById("tf1").value;
        tf2  = document.getElementById("tf2").value;
        tf3  = document.getElementById("tf3").value;
        tf4  = document.getElementById("tf4").value;
        tf5  = document.getElementById("tf5").value;
        tf6  = document.getElementById("tf6").value;
        tf7  = document.getElementById("tf7").value;
        tf8  = document.getElementById("tf8").value;
        tf9  = document.getElementById("tf9").value;
        
             if(tf1 == "")
            document.getElementById("tf1").value=("J");
        else if(tf2 == "")
            document.getElementById("tf2").value=("J");
        else if(tf3 == "")
            document.getElementById("tf3").value=("J");
        else if(tf4 == "")
            document.getElementById("tf4").value=("J");
        else if(tf5 == "")
            document.getElementById("tf5").value=("J");
        else if(tf6 == "")
            document.getElementById("tf6").value=("J");
        else if(tf7 == "")
            document.getElementById("tf7").value=("J");
        else if(tf8 == "")
            document.getElementById("tf8").value=("J");
        else if(tf9 == "")
            document.getElementById("tf9").value=("J");
                
        document.getElementById("b10").style.visibility="hidden";
    }