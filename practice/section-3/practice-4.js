function create_updated_collection(collection_a, object_b) {
  //在这里写入代码



var new_collection= count_same_elements(collection_a);
console.log(new_collection);
var c_collection=sub_collection(new_collection, object_b);
function sub_collection(collection_a, object_b){
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


function count_same_elements(collection) {
  //在这里写入代码
  var same=[{ key:collection[0] , count:1 }];
  var temp=0;
  var newcollection=again_element(collection);
  for( var i=1; i<newcollection.length; i++ ){
        temp=0;

        
        for( var j=0; j<same.length; j++ ){

	if( newcollection[i]==same[j].key ){

		temp=1;
		same[j].count++;
		break;
	          }
        }

        if(  temp==0 )
        same.push({ key: newcollection[i], count: 1});
      }
      console.log(same);
      return same;  
}
function again_element(collection){
	 for(var i = 0; i < collection.length; i++) {
        
       		 if(collection[i].length > 1) {
            
		        		var num=parseInt(collection[i].substring(2,collection[i].length));
		        		var letter=collection[i].split(''); 
		        		
		        		for(var j=0;j<num;j++){
		        			collection.splice(i,0,letter[0]);
		        		}
		        		collection.splice( i+num , 1);
		        	}
	}        	
return collection;
}


return c_collection;
}
