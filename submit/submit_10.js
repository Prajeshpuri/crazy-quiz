function submit()
{
	 var tf1,tf2,tf3,tf4,tf5,tf6;
        tf1  = document.getElementById("tf1").value;
        tf2  = document.getElementById("tf2").value;
        tf3  = document.getElementById("tf3").value;
        tf4  = document.getElementById("tf4").value;
        tf5  = document.getElementById("tf5").value;
        tf6  = document.getElementById("tf6").value;
                

            if( (tf1 == "B") && 
        	(tf2 == "E") && 
        	(tf3 == "H") && 
        	(tf4 == "A") && 
        	(tf5 == "L") && 
        	(tf6 == "F") )
        {
        	alert("CORRECT ANSWER");
        	window.open("last page.html","_self");
        }

        else
        	alert("INCORRECT ANSWER");
}