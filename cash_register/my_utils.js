// THIS IS YOUR CUSTOM JAVASCRIPT UTILITY LIBRARY
// This file is already included in you project!
// Make use of your utility functions, and create some new ones!

(function(){

    this.myUtils = {}

    myUtils = {}

    myUtils.myEach = function myEach(arr, cb){
        var len = arr.length;
        for(var i=0; i<len; i++){
            cb(arr[i], i, arr);
        }
    }

    // myUtils.myMap
    myUtils.myMap = function myMap(arr, cb){
        var len = arr.length;
        var newArr = [];
        for(var i=0; i<len; i++){
        newArr[i] = cb(arr[i], i, arr);
        }
        return newArr;
    }

    // myUtils.myReduce
    myUtils.myReduce = function myReduce(arr, cb, val){
        var len = arr.length;
        val = val || 0;
        for(var i=0; i<len; i++){
        val = cb(val, arr[i], i, arr)
        }
        return val;
        }

    // myUtils.buildElement
    myUtils.buildElement = function buildElement(htmlTag, innerHTML) {
        return ("<" + htmlTag + ">" + innerHTML + "</" + htmlTag + ">")
    }

    // myUtils.toDollarAmount;
    myUtils.toDollarAmount = function toDollarAmount(num){
        num = parseFloat(Math.round(num*100)/100).toFixed(2);
        return num;
    }

    // myUtils.toCurrencyString;
    myUtils.toCurrencyString = function toCurrencyString(num, currency){
        //num = Math.round(num*100)/100;
        num = toDollarAmount(num);
        return currency + num;
    }
    
}.call(this))
