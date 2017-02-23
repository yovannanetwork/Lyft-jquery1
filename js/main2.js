/*function onSearch(){
	var listaArray = document.getElementById("country-list");
	listaArray.innerHTML = "";
	var input = document.getElementById("buscador").value;
	var tam = input.length;
	for(var i=0; i<countries.length; i++){
		var nombre = countries[i];
		var substraer = nombre.substring;
		if(input.length <= nombre.length && input.length != 0 && nombre.length != 0){
			if(input.toLowerCase() == substraer.toLowerCase()){
				var node = document.getElementsByTagName("li");
				var textNode = document.createTextNode(countries[i]);
				node.appendChild(textNode);
				document.getElementById("country-list").appendChild(node);
			}else{
				alert("no");
			}
		}
	}	
}*/
function searchContact(){ 
var search = document.getElementById("buscador");
var contacto = document.getElementsByTagName("li");
	console.log(contacto);
var forEach = Array.prototype.forEach;

search.addEventListener("keyup", function(evt){
  var choice = this.value;

  forEach.call(contacto, function(evt){
      if (evt.innerHTML.toLowerCase().search(choice.toLowerCase()) == -1)
          evt.parentNode.parentNode.style.display = "none";   
      else
         evt.parentNode.parentNode.style.display = "block";        
  });
}, 
false);
}





function validateNumber(_evt){
	number = window.event.keyCode;
	if((number>=48 && number<=57)|| number==8 || number==32){
		
	}else{
		_evt.preventDefault();
	}
}