
function count_same_elements(collection) {
  //在这里写入代码
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
