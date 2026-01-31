//Ethan Brown
$(document).ready(function() {
	$(".dropdown-content a").on("click", function(event) {
	    event.preventDefault(); // Stop page from jumping
	    var monthValue = $(this).text();
   	 $("#selected-month").text(monthValue);
	});
    $("#cheesecake-form").on("submit", function(event) {
        // Prevent breaking everything
        event.preventDefault();

        // const assignment
        const quantity = $("#quantity").val();
        const topping = $("input[name='topping']:checked").val();
        const notes = $("#notes").val();

        // logic for vegans
        if (notes.toLowerCase().includes("vegan")) {
            alert("Warning: Our cheesecakes contain dairy and are not vegan.");
        } else {
            // Replace form with order summary
            $("#order-container").html(
                "<h2>Thank you! Your order has been placed</h2>" +
                "<p><strong>Quantity:</strong> " + quantity + "</p>" +
                "<p><strong>Topping:</strong> " + topping + "</p>" +
                "<p><strong>Notes:</strong> " + notes + "</p>"
            );
        }
    });
});
