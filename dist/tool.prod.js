/*  prod 模式  */
(function () {
  'use strict';

  //     
  function add(a, b) {
    return a + b;
  }

  var utils = {
    add: add
  };

  //     

  var fn = function fn() {
    console.log('hello world');
  };
  console.log(utils.add(1, 2), fn());

}());
