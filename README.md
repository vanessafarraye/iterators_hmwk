# Iterator Challenge

Take a look at `my_utils.js`. Right now it only has a `myEach` function. Add the other iterators you built during the lecture: i.e. `myMap`, `myReduce`. The goal of this exercise is for you to 1) use the utilities you've already built to solve the problems in this exercise, 2) build and extend the myUtils library with additional helper functions. You also get to practice jQuery!

###Goals

* Use the iterators you've already built. Build new helper functions using your library (see below)!
* By the end of this homework you should have used: `myReduce`, `myMap`, and `myEach` at a minimum!


**Calucations**

1. Set SUBTOTAL to the sum of the prices.
2. Bonus: SALES TAX is 7.25%.
3. Bonus: TOTAL should reflect SUBTOTAL + SALES TAX.

**Formatting**

4. Sort the receipt alphabetically.
5. Fix the random capitalization in titles.
6. Returns / Refunds: If a number is negative, turn it red!

**Bonuses**

7. Zepplins are on sale! Filter for Zepplin in the title, discount them 10%.
8. Coupons! Check to see if any of the coupons apply to the line items.
9. Super Bonus: Take a look at `cash_register.html`. See the commented out form element? Add it back in. Can you dynamically add items to the receipt?

### Helper Functions

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