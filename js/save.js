$(function() {

	$("#saveButton").click(function(){
   
		//alert("In Save.js");
		var authenticated = localStorage.getItem("Welcome");
		alert(authenticated);
		if(authenticated == null) {
			//alert saying you need to login to use this feature
			
		}
		else {

			var openDiv = "<div> Welcome " + document.write(localStorage.getItem("Welcome")); 

			var calories = " <div> Calories : " + document.write(localStorage.getItem("calories")); 
	 		
	 		var closeDiv = "</div>"	 
		}

	});
	

});