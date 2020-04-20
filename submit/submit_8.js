function submit()
{
	 var tf1,tf2,tf3,tf4,tf5,tf6;
        tf1  = document.getElementById("tf1").value;
        tf2  = document.getElementById("tf2").value;
        tf3  = document.getElementById("tf3").value;
        tf4  = document.getElementById("tf4").value;
        tf5  = document.getElementById("tf5").value;
                      

        if( (tf1 == "I") && 
        	(tf2 == "N" || tf2 == "N ") && 
        	(tf3 == "B") &&
        	(tf4 == "O") && 
        	(tf5 == "X") )
        {
        	alert("CORRECT ANSWER");
        	window.open("9.html","_self");
        }

        else
        	alert("INCORRECT ANSWER");
}