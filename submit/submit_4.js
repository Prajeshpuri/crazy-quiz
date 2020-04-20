function submit()
{
	 var tf1,tf2,tf3,tf4,tf5,tf6,tf7,tf8,tf9,tf10;
        tf1  = document.getElementById("tf1").value;
        tf2  = document.getElementById("tf2").value;
        tf3  = document.getElementById("tf3").value;
        tf4  = document.getElementById("tf4").value;
        tf5  = document.getElementById("tf5").value;
        tf6  = document.getElementById("tf6").value;
        tf7  = document.getElementById("tf7").value;
        tf8  = document.getElementById("tf8").value;
        tf9  = document.getElementById("tf9").value;
        

            if( (tf1 == "B") && 
        	(tf2 == "R") && 
        	(tf3 == "E") && 
        	(tf4 == "A" || tf4 == "A ") && 
        	(tf5 == "K") && 
        	(tf6 == "F") &&
        	(tf7 == "A" || tf7 == "A ") && 
        	(tf8 == "S") &&
        	(tf9 == "T") )
        {
        	alert("CORRECT ANSWER");
        	window.open("5.html","_self");
        }

        else
        	alert("INCORRECT ANSWER");
}