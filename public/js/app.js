// cacheDOM
// render
// init
// addEventListener

var counter = {
  newValue: 0,
  init: function(){
    counter.cacheDom();
    counter.addEventListeners();
    counter.render();
  },
  cacheDom: function(){
    counter.minusButton = document.querySelector('#minus');
    counter.plusButton = document.querySelector('#plus');
    counter.view = document.querySelector('#view');
  },
  render: function(){
    // console.log(counter.view);
    counter.view.innerHTML = counter.newValue;
    // console.log(counter.newValue);
  },
  addEventListeners: function(){
    counter.minusButton.addEventListener('click', counter.minus1);
    counter.plusButton.addEventListener('click', counter.add1);
  },
  minus1: function(){
    var currentValue = parseInt(counter.view.innerHTML, 10);
    counter.newValue = currentValue - 1;
    // console.log(currentValue);
    // console.log(counter.newValue);
    counter.render();
  },
  add1: function(){
    var currentValue = parseInt(counter.view.innerHTML, 10);
    counter.newValue = currentValue + 1;
    // console.log(currentValue);
    // console.log(counter.newValue);
    counter.render();
  }
};

counter.init();
