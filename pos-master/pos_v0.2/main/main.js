//TODO: Please write code in this file.
function printReceipt(inputs) {
	var items=buildItems(inputs);
	console.log(items);
	var cartItems=buildCartItems(items);
	console.log(cartItems);
	var receiptItems=buildReceiptItem(cartItems);
	console.log(receiptItems);
	var receipt=buildReceipt(receiptItems);
	console.log(receipt);
	var receiptText=toReceiptText(receipt);

	console.log(receiptText);
}
function buildItems(inputs) {
	var items=[];
	var allItems=loadAllItems();
	inputs.forEach(function (input){
		var item=getExistItem(input,allItems);
		if(item){
			items.push(item);
		}
	});
	return items;
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