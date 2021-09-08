 $('#txt').bind('copy', function (event) {
                
     var clipboardData = event.clipboardData || window.clipboardData || event.originalEvent.clipboardData;
     
     var range = window.getSelection().getRangeAt(0);
		 var selectionContents = range.cloneContents();	
     //var div = document.getElementById("output");
     var div = document.createElement("div");
		 div.appendChild(selectionContents);
     
     clipboardData.setData("text/plain",div.innerHTML);
	 
     div.remove();

     event.preventDefault();
     
  });       
