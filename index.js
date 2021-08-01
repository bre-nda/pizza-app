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
                priceCrust = 100;
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