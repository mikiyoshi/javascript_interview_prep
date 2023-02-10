this.color = 'Red';

var myCar = {
  color: 'Blue',
  logColor: function () {
    var self = this;
    console.log('In logColor = this.color: ' + this.color);
    console.log('In logColor = self.color: ' + self.color);
    (function () {
      console.log('In IIFE = this.color: ' + this.color); // 'this' is global object
      console.log('In IIFE = self.color: ' + self.color);
    })();
  },
};

myCar.logColor();
// In logColor = this.color: Blue
// In logColor = self.color: Blue
// In IIFE = this.color: Red // this is only tested in Browser type all code  // terminal is error
// In IIFE = self.color: Blue
