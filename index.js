function Pizza(pizza, size, crust, toppings) {
    this.pizza = pizza;
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
}
var priceSize, priceCrust, priceTopping;
var price = function(pizzaSize, pizzaCrust, pizzaTopping) {
    switch (pizzaSize) {
        case "":
            priceSize = 0;
            break;
        case "large":
            priceSize = 1200;
            break;
        case "medium":
            priceSize = 800;
            break;
        case "small":
            priceSize = 650;
            break;
        default:
            location.reload();
            alert("Please select a pizza size");
    };
    switch (pizzaCrust) {
        case "":
            priceCrust = 0;
            break;
        case "crispy":
            priceCrust = 120;
            break;
        case "stuffed":
            priceCrust = 200;
            break;
        case "thick":
            priceCrust = 150;
            break;
        default:
            location.reload();
            alert("Please choose a crust");
    };
    if (pizzaSize == 'large') {
        priceTopping = pizzaTopping.length * 200;
    } else if (pizzaSize == 'medium') {
        priceTopping = pizzaTopping.length * 150;
    } else if (pizzaSize == 'small') {
        priceTopping = pizzaTopping.length * 100;
    }

    var pizzaTotal = priceSize + priceCrust + priceTopping;
    return pizzaTotal;
}