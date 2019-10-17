// Calculate amount based on input serving
$(function () {
    $('.serving').bind('keyup', function (event) {
        var previousValue = parseFloat($("#previousServing").val());
        var newValue = parseFloat($(event.target).val());
        if (previousValue && newValue) {
            $('.ingredient').each(function (index, elem) {
                var ingredientNow = $('.amount', elem);
                var oldIngredientAmount = ingredientNow.text();
                var newIngredientAmount = oldIngredientAmount * newValue / previousValue;
                ingredientNow.text(newIngredientAmount);
            });
            $('#previousServing').val(newValue);

            console.log("Die neue Menge beträgt:", newValue);

            if (newValue <= 0) {
                alert("Der Wert muss größer als 0 sein.")
            };
        }
    });
});

// Hide and show ingredients
$("#button").click(function () {
    $(".ingredients").fadeOut();
});

$("#button2").click(function () {
    $(".ingredients").fadeIn();
});


