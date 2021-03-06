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
$(document).ready(function() {
    $("#order-now").click(function() {
        $(".view-two").show();
        $(".view-one").hide();
    })
    $("#continue").click(function(event) {
        event.preventDefault();
        $(".view-three").show();
        $(".view-two").hide();
        //get form values
        let pizzaName = $("#pizza option:selected").val();
        let pizzaSize = $("#size option:selected").val();
        let pizzaCrust = $("#crust option:selected").val();
        var pizzaTopping = [];
        $("input:checkbox[name=toppings]:checked").each(function() {
            pizzaTopping.push($(this).val());
        });
        var total = price(pizzaSize, pizzaCrust, pizzaTopping);
        var grandTotal = total + 300;
        var order = new Pizza(pizzaName, pizzaSize, pizzaCrust, pizzaTopping)
        $(".current-order").append('<tr><td id="name">' + order.pizza + '</td><td id="size">' + order.size + '</td><td id="crust">' + order.crust + '</td><td id="toppings">' + order.toppings + '</td><td id="total">' + total);

        //Pickup button
        $("#pick-up").click(function() {
            alert("Dear customer, your order will be ready for pickup in 30 minutes. Your order total is: " + total);

            //refresh page
            location.reload();
        })
        $("#checkout").click(function() {

            var clientName = $("#full-name").val();
            var clientNumber = $("#phone-number").val();
            var clientLocation = $("#location").val();

            if (clientName === "" || clientNumber === "" || clientLocation === "") {
                alert("Please fill in the delivery form. All fields are required")
            } else {
                alert("Dear " + clientName + " your order will be delivered to " + clientLocation + " within the hour! Your order total is: " +
                    grandTotal + " Our rider will call you on arrival");
            }
        })
    })
    $("#add").click(function(event) {
        event.preventDefault();


        $(".view-three").hide();
        $(".view-four").hide();
        $(".view-two").show();
        document.getElementById("form1").reset();
    })


    $("#delivery").click(function() {
        $(".table-buttons").hide();
        $(".view-four").slideDown();
    })
})