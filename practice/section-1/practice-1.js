
/*function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
	var collection_same=[];
	for(var i=0;i<collection_a.length;i++){
		for(var j=0;j<collection_b.length;j++){
			if(collection_a[i]==collection_b[j]){
				collection_same.push(collection_a[i]);
				break;			
			}
		}
	}
console.log(collection_same);
return collection_same;
}
*/

function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  var newArray=[];

  /*for(var i=0;i<collection_a.length;i++){
    var element=collection_a[i];*/
    collection_a.forEach(function(element){

    if(isExist(element ,collection_b)){
      newArray.push(element);
    }
  });
  return newArray;
}
function isExist( element ,collection){

  for(var i=0;i<collection.length;i++){
    if( collection[i]===element ){
  
      return true;
    }
  }
  return false;
}
