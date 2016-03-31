function create_updated_collection(collection_a, object_b) {
  //在这里写入代码\
	for(var i=0;i<collection_a.length;i++){
			for(var j=0;j<object_b.value.length;j++){
				if(collection_a[i].key==object_b.value[j]){
					var num=parseInt(collection_a[i].count/3);
					collection_a[i].count -=num;
				}
			}
	  	}
	return collection_a;
}
