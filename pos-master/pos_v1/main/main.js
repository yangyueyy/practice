//TODO: Please write code in this file.
function printReceipt(inputs) {
	var cartItems=buildCartItems(inputs);
	console.log(cartItems);
	var receiptItems=buildReceiptItem(cartItems);
	console.log(receiptItems);
	var receipt=buildReceipt(receiptItems);
	console.log(receipt);
	var receiptText=toReceiptText(receipt);
	console.log(receiptText);
}

function buildCartItems(inputs) {
	var cartItems=[];
	var allItems=loadAllItems();
	inputs.forEach(function (input){
		var barcode=input.split('-');
		var item=getExistItem(barcode[0],allItems);
		var cartItem=getExistCartItem(barcode[0], cartItems);
		if(cartItem){
			cartItem.count++;
		}
		else{
			if(barcode.length>1){
				cartItems.push({item:item, count:barcode[1]});
			}
			else{
				cartItems.push({item:item, count:1});
			}
		}
	});
	return cartItems;
}
function getExistItem(barcode, allItems) {
	var existItem;
	var i=0;
	/*allItems.forEach(function (item){
		if(item.barcode===barcode){
			existItem=item;
		}
	});*/
	for(i=0;i<allItems.length;i++){
		if(allItems[i].barcode===barcode){
			existItem=allItems[i];
			break;
		}
	}
	return existItem;
}

function getExistCartItem(barcode, cartItems) {
	var existCartItem;
	cartItems.forEach(function (cartItem){
		if(cartItem.item.barcode===barcode){
			existCartItem=cartItem;
		}
	});
	return existCartItem;
}
function buildReceiptItem(cartItems) {
	var receiptItems=[];
	var promotions=loadPromotions();
	
	cartItems.forEach(function (cartItem) {
		var flag=isExistbarcode(promotions,cartItem);
			if(flag){
				receiptItems.push({cartItem: cartItem, subTotal: (cartItem.item.price*2)*Math.floor(cartItem.count/3)+cartItem.count%3*cartItem.item.price});
			}
			else{
				receiptItems.push({cartItem: cartItem, subTotal: cartItem.item.price*cartItem.count});
			}
		});
	return receiptItems;
}
function isExistbarcode(promotions,cartItem){
	var barcodes=promotions[0].barcodes;
	var i=0;
	var f=false;
//	console.log(barcodes);
	for(i=0;i<barcodes.length;i++){
		if(barcodes[i]===cartItem.item.barcode){
		f=true;
	//	break;
		}
	}
	return f;
}
function buildReceipt(receiptItems) {
	var total=0;
	var allTotal=0;
	var save=0;
	receiptItems.forEach(function(receiptItem){
		total+=receiptItem.subTotal;
		allTotal+=receiptItem.cartItem.count*receiptItem.cartItem.item.price;
	});
	save=allTotal-total;
	return {receiptItems:receiptItems, total:total, save:save};
}

function toReceiptText(receipt) {

  var text ='***<没钱赚商店>收据***\n' +
    generateReceiptItemsText(receipt.receiptItems) +
    '----------------------\n' +
    '总计：' + formatPrice(receipt.total) + '(元)\n' +
    '节省：' + formatPrice(receipt.save) + '(元)\n' +
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