var abc=document.querySelector('.id');
abc.addEventListener("click",function(){

var fn=document.form1.fname.value;
	if(fn == "")
	{
		alert('Please input Firstname');
		return false;
	}
	var ln=document.form1.lname.value;
	if(ln == "")
	{
		alert('Please input Lastname');
		return false;
	}
	var m = document.getElementById('male');
	var f = document.getElementById('female');
	if((m.checked == false)&&(f.checked == false))
	{
		alert("Please choose gender");
		document.getElementById("gen").style.border = "2px solid red";
		return false;
	}
	else
	{
		document.getElementById("gen").style.border = "";
	}
	var c = document.getElementById('Subjects');
	if(c.value == null || c.value == "")
	{
		alert('Please select a Subject');
		return false;
	}
	var p = document.form1.phone.value;
	if(isNaN(p))
	{
		alert('Enter only numbers');
		return false;
	}
	if(p=="")
	{
		alert('Enter 10 digits');
		return false;
	}
	if(p.length>10)
	{
		alert('Enter 10 digits');
		return false;
	}
	if(p.length<10)
	{
		alert('Enter 10 digits');
		return false;
	}
	var em=document.form1.email.value;
	var atpos=em.indexOf("@");
	var dotpos=em.lastIndexOf(".");
	if(atpos<1 || dotpos<atpos+2 || dotpos+2>=em.length)
	{
		alert('Invalid email id');
		return false;
	}
	alert("Successfully Registered");
	var ch=document.querySelector(".id");
	ch.target = "_self";
	window.open("home.html",ch.target);
})