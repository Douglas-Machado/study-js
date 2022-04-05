function Product(name, price){
  this.name = name
  this.price = price
}

//prototypes of product constructor
Product.prototype.increase = function(amount){
  this.price += amount
}
Product.prototype.discount = function(amount){
  this.price -= amount
}

function Shirt(name, price, color){
  Product.call(this, name, price)
  this.color = color
}
// creating the prototype and assigning it constructor value to the Shirt instead of Product 
Shirt.prototype = Object.create(Product.prototype)
Shirt.prototype.constructor = Shirt

function Cup(name, price, material, inventory){
  Product.call(this, name, price)
  this.material = material
  Object.defineProperty(this, 'inventory', {
    enumerable: true,
    configurable: false,
    get: function(){
      return inventory;
    },
    set: function(value){
      if (typeof value != 'number') return;
      inventory = value;
    }
  })
}

Cup.prototype = Object.create(Product.prototype)
Cup.prototype.constructor = Cup

Cup.prototype.departure = function(amount){
  this.inventory -= amount
}

const product = new Product('Generic', 5)
const shirt = new Shirt('Polo', 13, 'red')
const cup = new Cup('Spider-man cup', 44, 'porcelain', 200)
cup.inventory = 50
console.log(cup)
console.log(product)
console.log(shirt)
console.log(cup.inventory)

