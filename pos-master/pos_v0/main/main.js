//TODO: Please write code in this file.
function printReceipt(cartItems) {
	var receiptItems=buildReceiptItem(cartItems);
	console.log(receiptItems);
	var receipt=buildReceipt(receiptItems);
	console.log(receipt);
	var receiptText=toReceiptText(receipt);

	console.log(receiptText);

}
function buildReceiptItem(cartItems) {
	/*var i=0;
	for(i=0;i<cartItems.length;i++){
		cartItems[i].allprice=cartItems[i].count*cartItems[i].price;
	}
	return cartItems;
*/
	var receiptItems=[];
	cartItems.forEach(function (cartItem) {
		receiptItems.push({cartItem: cartItem, subTotal: cartItem.price*cartItem.count});
	});
	return receiptItems;
}
function buildReceipt(receiptItems) {
	/*var  receiptItem=0;
	for(i=0;i<receiptItems.length;i++){
		receiptItem+=receiptItems[i].allprice;
	}
	return receiptItem;	
*/
	var total=0;
	receiptItems.forEach(function(carItem){
		total+=carItem.subTotal;
	});
	return {receiptItems:receiptItems, total:total};
}


function toReceiptText(receipt) {
	/*var Text=  '***<没钱赚商店>收据***\n' +
      '名称：可口可乐，数量：5瓶，单价：3.00(元)，小计：15.00(元)\n' +
      '名称：雪碧，数量：2瓶，单价：3.00(元)，小计：6.00(元)\n' +
      '名称：电池，数量：1个，单价：2.00(元)，小计：2.00(元)\n' +
      '----------------------\n' +
      '总计：23.00(元)\n' +
      '**********************';*/
      var Text='';
     var receiptItems=receipt.receiptItems;
      Text=  '***<没钱赚商店>收据***\n' 
      receiptItems.forEach(function(receiptItem){
      Text+='名称：'+receiptItem.cartItem.name+'，数量：'+receiptItem.cartItem.count+receiptItem.cartItem.unit+'，单价：'+receiptItem.cartItem.price.toFixed(2)+'(元)，小计：'+receiptItem.subTotal.toFixed(2)+'(元)\n' 
     });
      Text+='----------------------\n' +
      '总计：'+receipt.total.toFixed(2)+'(元)\n' +
      '**********************';
      return Text;

}