function submit()
{
	 var tf1,tf2,tf3,tf4,tf5,tf6;
        tf1  = document.getElementById("tf1").value;
        tf2  = document.getElementById("tf2").value;
        tf3  = document.getElementById("tf3").value;
        tf4  = document.getElementById("tf4").value;
        tf5  = document.getElementById("tf5").value;
        tf6  = document.getElementById("tf6").value;
                

            if( (tf1 == "T") && 
        	(tf2 == "I") && 
        	(tf3 == "S" || tf3 == "S ") && 
        	(tf4 == "S" || tf4 == "S ") && 
        	(tf5 == "U") && 
        	(tf6 == "E") )
        {
        	alert("CORRECT ANSWER");
        	window.open("10.html","_self");
        }

        else
        	alert("INCORRECT ANSWER");
}