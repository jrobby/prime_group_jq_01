
function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}





// Prime Group jQuery Challenge
// jQuery is great! It allows us to do so many things! You and your group will need to flex everything
//  you know about Javascript, jQuery, and Bootstrap to tackle this challenge.

// The Fruit Market

// For this challenge, you will be working with 4 commodities; Apples, Oranges, Bananas, and Grapes. 
// Delicious, right?



// When the application loads, you will need to have information for each of the commodities, 
// specifically the name and the ‘market price’ of each. This information will need to be 
//displayed in a meaningful way on the DOM.

// Every 15 seconds, the prices should change however, and with it, the listed price on the DOM. 
// Specifically, the market price of each of the items should fluctuate up or down 50 cents (between 
// 	1 cent and 50 cents) with each 15 second interval. Any given fruit is not allowed to go below a
// 	cost of 50 cents, or above the cost of 9 dollars and 99 cents.



// The information displayed for each of the fruit should have a ‘button like’ functionality where the 
// user can interact with each of the fruit displays.

// Available to the user is a ‘total cash’ and an inventory display that shows how much of each of the 
// fruits they have purchased. 

var totalCash = 100


//Also in the user display, should be an ‘average purchased price’, which
//  shows, on average, how much money they have spent on a given fruit in their inventory.


//var grape = {name: 'grape', price: 0, averagePrice: 0, totalSpent: 0, totalPurchased:0} 

var apple = {name: 'apple', price:0, averagePrice: 0, totalSpent: 0, totalPurchased:0}

var orange = {name: 'orange', price: 0, averagePrice:0, totalSpent:0, totalPurchased:0}
var banana = {name:'banana', price:0, averagePrice:0, totalSpent:0, totalPurchased:0}
var pear = {name:'pear', price:1, averagePrice:0, totalSpent:0, totalPurchased:0}


var fruitArray = [orange, apple, banana, pear];

// $('button').on('click', '#grapes', function() {
// 	totalCash-=grapesPrice;
// 	grapesPurchased++;
// 	totalSpentOnGrapes+=grapesPrice;
// 	averageGrapePrice  = totalSpentOnGrapes/grapesPurchased;

// })


$(document).ready(function(){
	$('button').on('click', function() {
		for (var i=0; i<fruitArray.length;i++) {
		    	if (fruitArray[i].name == $(this).parent().attr('id')) {
			    	totalCash-=fruitArray[i].price;
			    	
					fruitArray[i].totalPurchased++;
					fruitArray[i].totalSpent+=fruitArray[i].Price;
					fruitArray[i].averagePrice  = fruitArray[i].totalSpent/fruitArray[i].totalPurchased;
	}	
			$(this).next().append(fruitArray[i].averagePrice);
	}

	});
});



// Meaning that by clicking on the display for each of the fruits, allows the user to ‘buy’ one of the
//  fruits, at market price, which will be deducted from the total cash. The user is not allowed to spend
//   more than they have.

// The user will start with $100.

// Finally, style the whole experience with Bootstrap





