
var Child_Class = Class.create({

	name: 'alex',

	initialize: function(name){
		this.my_name = name;
	},

	my_name: function(){
		return this.name;
	}

});

var Person = Class.create({
  initialize: function(name) {
    this.name = name;
  },
  say: function(message) {
    return this.name + ': ' + message;
  }
});

var alex = new Person('alex');
console.log(alex.say('hello there'));
