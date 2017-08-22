
var newArray=[];  
function numbersOnly(items){
    for(var i=0; i<items.length; i++){
    if (typeof items[i] == "number"){
        newArray.push(items[i]);
      }
    }     
    console.log(newArray);
}
numbersOnly([6, "dog", 77, "cat", 81, "fish"]);