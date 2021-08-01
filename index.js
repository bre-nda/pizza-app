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
                priceSize = 1000;
                break;
            case "medium":
                priceSize = 800;
                break;
            case "small":
                priceSize = 550;
                break;
            default:
                location.reload();
                alert("Please select a pizza size");
        };