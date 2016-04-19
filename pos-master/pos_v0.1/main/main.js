//TODO: Please write code in this file.
function printReceipt(items) {
	var cartItems=buildCartItems(items);
	console.log(cartItems);
	var receiptItems=buildReceiptItem(cartItems);
	console.log(receiptItems);
	var receipt=buildReceipt(receiptItems);
	console.log(receipt);
	var receiptText=toReceiptText(receipt);

	console.log(receiptText);
}
function buildCartItems(items) {
	var cartItems=[];
	items.forEach(function (item){
		var cartItem=getExistCartItem(item.barcode, cartItems);
		if(cartItem){
			cartItem.count++;
		}
		else{
			cartItems.push({item:item, count:1});
		}
	});
	return cartItems;
}
function getExistCartItem(barcode, cartItems) {
	var existCartItem;
	cartItems.forEach(function (cartItem){
		if(cartItem.item.barcode==barcode){
			existCartItem=cartItem;
		}
	});
	return existCartItem;
}
function buildReceiptItem(cartItems) {
	var receiptItems=[];
	cartItems.forEach(function (cartItem) {
		receiptItems.push({cartItem: cartItem, subTotal: cartItem.item.price*cartItem.count});
	});
	return receiptItems;
}
function buildReceipt(receiptItems) {
	var total=0;
	receiptItems.forEach(function(carItem){
		total+=carItem.subTotal;
	});
	return {receiptItems:receiptItems, total:total};
}

function toReceiptText(receipt) {

  var text =
    '***<没钱赚商店>收据***\n' +
    generateReceiptItemsText(receipt.receiptItems) +
    '----------------------\n' +
    '总计：' + formatPrice(receipt.total) + '(元)\n' +
    '**********************';

  return text;
}

function formatPrice(price) {
  return price.toFixed(2);
}

function generateReceiptItemsText(receiptItems){
  var receiptItemsText = '';
  receiptItems.forEach(function (receiptItem) {
    var cartItem = receiptItem.cartItem;
    receiptItemsText += '名称：' + cartItem.item.name + '，数量：' + cartItem.count+ cartItem.item.unit + '，单价：' + formatPrice(cartItem.item.price)+ '(元)，小计：' + formatPrice(receiptItem.subTotal) + '(元)\n';
  });
  return receiptItemsText;
}


/*
//myself 
function getCartItems(items) {
	var tt=0;
	var item=[];
	item[0]=items[0];
	item[0].count=1;
	console.log(item);
	var temp=0;
	for(i=1;i<items.length;i++){
		temp=0;
		for(j=0;j<item.length;j++){
			if(items[i].name===item[j].name){
				item[j].count++;
				temp=1;
				break;
			}
		}
		if(temp==0){
			item[item.length]=items[i];
			tt=item.length-1;
			item[tt].count=1;
		}
	}
	return item;
}*/
/*
function getCartItems(items) {
	var item=[];
	item=[{key:items[0],count:1}];
	var temp=0;
	for(i=1;i<items.length;i++){
		temp=0;
		for(j=0;j<item.length;j++){
			if(items[i].name===item[j].key.name){
				item[j].count++;
				temp=1;
				break;
			}
		}
		if(temp==0){
			item.push({key:items[i],count:1});	
		}
	}
	
	return item;
}*/

//foreach  

/*function getCartItems(inputs) {
    var elements = [];
    
    inputs.forEach(function(item) {
        var element = isElementExist(item, elements);
        if(element) {
            element.count++;
        }else{
            elements.push({items: item, count: 1});
        }   
    });
    return elements;
}

function isElementExist(item, elements) {
    var existedElement;
    elements.forEach(function(element) {
        if(item.barcode === element.items.barcode) {
            existedElement = element; 
        }
    });
    return existedElement;
}*/

/*
function getReceiptItem(cartItems) {
//	var cartItem=[];
	var i=0;
	for(i=0;i<cartItems.length;i++){
		cartItems[i].allprice=cartItems[i].count*cartItems[i].price;
		
	}

	return cartItems;
}
function getReceipt(receiptItems) {
	var  receiptItem=0;
	for(i=0;i<receiptItems.length;i++){
		receiptItem+=receiptItems[i].allprice;
	}

	return receiptItem;

}
function toReceiptText(receipt) {
	var Text=  '***<没钱赚商店>收据***\n' +
      '名称：可口可乐，数量：5瓶，单价：3.00(元)，小计：15.00(元)\n' +
      '名称：雪碧，数量：2瓶，单价：3.00(元)，小计：6.00(元)\n' +
      '名称：电池，数量：1个，单价：2.00(元)，小计：2.00(元)\n' +
      '----------------------\n' +
      '总计：23.00(元)\n' +
      '**********************';
      

}*/