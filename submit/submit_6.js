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
                

            if( (tf1 == "C" || tf1 == "C ") && 
        	(tf2 == "A") && 
        	(tf3 == "B") && 
        	(tf4 == "I") && 
        	(tf5 == "N") && 
        	(tf6 == "E") &&
        	(tf7 == "T") )
        {
        	alert("CORRECT ANSWER");
        	window.open("7.html","_self");
        }

        else
        	alert("INCORRECT ANSWER");
}