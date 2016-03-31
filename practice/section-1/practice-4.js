function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var  collect_same=[];
  for(var i = 0 ; i < collection_a.length ; i++){
  	for(var j=0; j<object_b.value.length; j++){
  		if(collection_a[i].key==object_b.value[j]){
  			 console.log(collection_a[i].key);
  			collect_same.push(collection_a[i].key);
  			break;
  		}

  	}
  }
   console.log(collect_same);
  return collect_same;
}
