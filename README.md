# Iterator Challenge

Take a look at `my_utils.js`. Right now it only has a `myEach` function. Add the other iterators you built: i.e. `myMap`, `myReduce`. The goal of this exercise is for you to 1) use the utilities you've already built to solve the problems in this exersie, 2) build and extend the myUtils library with additional helper functions. You also get to practice jQuery!


###Goals

* Use the iterators you've already built. Build new tools using your tools!
* By the end of this homework you should have used: `myReduce`, `myMap`, and `myEach` at a minimum!

1. SubTotal is the sum of prices on the receipt
1. Bonus: Sales Tax is 7.25%
1. Bonus: The total should reflect SubTotal + Sales Tax
1. Sort the receipt alphabetically
1. Fix the random capitalization in titles.
2. Returns / Refunds: If a number is negative, turn it red!
1. Bonus: Zepplins are on sale! Filter for Zepplin in the title, discount them 10%.
1. Bonus: Coupons! Check to see if any of the coupons apply to the line items.
1. Super Bonus: Take a look at `cash_register.html`. See the commented out form element? Add it back in. Can you dynamically add items to the receipt?

**Helper Functions**

* Create a helper functions which outputs html strings.
    ```
        myUtils.buildElement("p", "Words words words")
        // "<p>Words words words</p>"
    ```

* Create a helper function which takes a float and converts it to a currency amount
    ```
        myUtils.toDollarAmount(12.971)
        // 12.97
    ```

* Create a helper function which takes a dollar amount and returns a correctly formatted string:
    ```
        myUtils.toDollarAmount(12.971, "$")
        // $12.97

        myUtils.toDollarAmount(.97, "$")
        // $0.97
    ```