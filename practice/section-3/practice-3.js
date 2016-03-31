function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
 var old=old_collection(collection_a);
 console.log(old);


var a=result(old, object_b);
function result(collection_a, object_b){
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
 
 function old_collection(collection){
  var same=[{ key:collection[0] , count:1 }];
  var temp=0;
  for( var i=1; i<collection.length; i++ ){
        temp=0;

        for( var j=0; j<same.length; j++ ){
          if( collection[i]==same[j].key ){
                temp=1;
                 same[j].count++;
                 break;
          }
        }

        if(  temp==0 )
        same.push({ key: collection[i], count: 1});
      }
      return same;  
  }
  return  a;
}

