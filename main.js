//3.Get time from user and find(morning,afternoon,or night)

var a=parseInt(prompt("Enter the Month"));
var date=new Date();
	date.setHours(a);
var b=date.getHours();

	if(b>=6 && b<12)
	{
	document.write("Morning");
	}
	
	else if(b>=12 && 18>b)
	{
		document.write("Afternoon");
	}
	
	else if(18<=b && 24>b)
	{
	document.write("Night")	;
	}
	
	else
	{
		document.write("Mid Morning")
	}