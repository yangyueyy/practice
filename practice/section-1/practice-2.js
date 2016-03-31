function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
	var collection_same=[];
	for(var i=0;i<collection_a.length;i++){
		for(var j=0;j<collection_b[0].length;j++){
			if(collection_a[i]==collection_b[0][j]){
				collection_same.push(collection_a[i]);
				break;			
			}
		}
	}
console.log(collection_same);
return collection_same;

}
