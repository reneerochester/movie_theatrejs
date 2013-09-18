

/*var movie_name = prompt('What movie would you like to see tonight?');  //asks movie name


var ask_popcorn = prompt("Would you like popcorn?"); // offers popcorn @ $4.00 each

var ask_drink = prompt("Would you like a drink?"); //this gets asked by default.

var comboPrompt = prompt("Wanna make it a combo?"); // if the person wants both drinks and popcorn, the combo is $5.50
var cash_paymentType = prompt("Would you like to pay in cash?")
var credit_paymentType = prompt("Would you like to pay in credit")?
var voucherPaymentType = prompt("Do you have a voucher")?*/

var total = 0;
var ticketPrice = 13;
var popcornPrice = 7;
var drinkPrice = 5;

var greet = alert("Hey Welcome to Spotlight City Theatres!");

var movie_name = prompt('What Movie would you like to see tonight?');  //asks movie name
if (movie_name.length > 0){
	alert("Great!");
}
else{
	alert("Oops, looks like you forgot to enter a movie name!");
}

var timeFrame = prompt("At What Time would you like to see your movie?"); // asks what time they would like to see the movie 
if (timeFrame > 8) {
	alert("Awesome! a late show of " + movie_name + " at " + timeFrame + ":00 is available !");
}
else if(timeFrame < 7 ){
	alert("Fantastic!");
}

else{
	alert("Sorry, your movie must within a 12 hour period!");
}

var ticketQuantity = prompt("How many tickets woudl you like to buy?"); // asks how many tickets they want to buy

if (ticketQuantity > 1){
	total += (ticketPrice * ticketQuantity);
	alert("How exiting! a group outing!");
}
else{
		total += 13;
}

var ask_drink = prompt("Would you like a drink?"); //this gets asked by default.
	if (ask_drink === "yes"){
		var drinkQuantity = prompt("How many drinks would you like to order"); // if the person is bringing a guest, this gets asked
			if (drinkQuantity > 0 ){
 			total += (drinkPrice * drinkQuantity);
							}
			}

var ask_popcorn = prompt("Would you like to add popcorn for $4.00?"); // offers popcorn @ $4.00 each
if (ask_popcorn == "yes"){
	var popcornQuantity = prompt("How many popcorns would you like to buy?"); // if the answer is more than one, they will get a discount want more than one popcorn then the price is 2 for 6 dollars
		if (popcornQuantity > 0){
			total += (popcornPrice * popcornQuantity);
		}
}

yourInvoice = function(movie_name,timeFrame,ticketQuantity,total,drinkQuantity){

	if(ticketQuantity > 1){
		alert(" Great, you bought " + ticketQuantity + "tickets " + "for " + movie_name + " at " + timeFrame + " :00 ," + "You ordered "+ drinkQuantity + "drinks, " + popcornQuantity +"bags of popcorn, your total is $"+ total + ".00");
	}

	else{
		alert(" Great, you bought " + ticketQuantity + "ticket " + "for " + movie_name + " at " + timeFrame + ":00 ." + " your total is $"+ total + ".00");
	}
};


yourInvoice(movie_name,timeFrame,ticketQuantity,total,popcornQuantity);












