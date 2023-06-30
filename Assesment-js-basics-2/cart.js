///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((acc, curr)=> acc + curr.price,0)

console.log(summedPrice)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
let calcFinalPrice = (cartTotal, couponValue, tax) => {
let answer = (cartTotal * (tax + 1)) - couponValue
return answer
}

console.log(calcFinalPrice(100, 10, .06))



//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    id: Uniqe identifier for customer.
    Type- Number - For simple organization.

    location: For demographic research to contribute to marketing and expansion analytics.
    Type- String - Readability.

    language: To determine which language to display.
    Type- String - Because language is a word.

    currency: To determine which payment method to use,
    Type- String - To specify the type of currency.

    active: So we can identify if this customer is engaged with our restaurant In order to better drive marketing.
    Type- Boolean - Because it is either true or false.
   
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customer = {      
    id: 153, 
    location: 'Dallas',
    language: 'English',
    currency: 'Dollar',
    active: true,
    };
