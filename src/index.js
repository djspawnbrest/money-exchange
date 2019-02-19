// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
	
	let result={}; // Work object for result
    let cnt=[]; // count of coins work array
	// H-50, Q-25, D-10, N-5, P-1
	let strings=["H","Q","D","N","P"]; //Strings of coins array 
	// If the currency to exchange more than 10000 return "error object"
    if(currency>10000){
        result={error:'You are rich, my friend! We don\'t have so much coins for exchange'};
    }else{
		//form the number of coins
        cnt[0]=Math.floor(currency/50);
		currency=currency-cnt[0]*50;
        cnt[1]=Math.floor(currency/25);
		currency=currency-cnt[1]*25;
        cnt[2]=Math.floor(currency/10);
		currency=currency-cnt[2]*10;
        cnt[3]=Math.floor(currency/5);
		currency=currency-cnt[3]*5;
        cnt[4]=Math.floor(currency/1);
        currency=currency-cnt[4]*1;
		//form the object with the result
        let i=0;
        strings.forEach(item=>{
            if(cnt[i]>0)result[item]=cnt[i];
            i++;
        });
    }
	//returns result to test (if currency is empty - returns empty object)
    return result;
}