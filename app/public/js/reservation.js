

/** GLOBAL VARS**/
var selected = false;
var resRestaurant;
var resMobile;
var resAppetizer;
var resTime;
var resGuests;
// var moment = require('moment');



/**  RESTAURANT SELECT **/
//____________________________________________________________//
$(document).ready(function() {
//MEXICAN
$('#mexican').on('click', function () {

    var mexicanSelect = "<h4 style='font-weight:bold;'>Fiesta Mexicana</h4>"
    var query = "<h5 style='color: coral;'>Would you like to add an appetizer? (30% SeatYourself Discount!)</h5>"
    var radioButtonMex = "<form id='appetizerMex' action='/'><input type='radio' name='appetizerMex' value='Chips and Salsa' id='chips' /><label for='chips' class='app' id='yes'>Tortilla Chips and Salsa $5.99</label><br><input type='radio' name='appetizerMex' value='No appetizer.' id='no' /><label for='no' class='app' id='no'>No thank you!</label></form>"
    // var noThankYou = "<div class='form-check'><input class='form-check-input' type='radio' name='chips' id='noMexApp' value='no chips'><label class='form-check-label' for='exampleRadios1'>No, thank you.</label></div>"
    $(mexicanSelect).appendTo('#mexican-appetizer');
    $(query).appendTo('#mexican-appetizer');
    $(radioButtonMex).appendTo('#mexican-appetizer');

    $("input[type='radio']").click(function () {
        var radioValue = $("input[name='appetizerMex']:checked").val();
        if (radioValue) {
            resRestaurant = "Fiesta Mexicana";
            resAppetizer = radioValue;
        }
        console.log(resRestaurant);
        console.log(resAppetizer);
        $("#mexican-appetizer").text("You selected " + resRestaurant + "\nwith " + resAppetizer);
    });

});

//ITALIAN
$('#italian').on('click', function () {
    var italianSelect = "<h4 style='font-weight:bold;'>Ristorante Italiano</h4>"
    var query = "<h5 style='color: coral;'>Would you like to add an appetizer? (30% SeatYourself Discount!)</h5>"
    var radioButtonItl = "<form id='appetizerItal' action='/'><input type='radio' name='appetizerItal' value='Bruschetta' id='bread' /><label for='bread' class='app'>Bruschetta $5.99</label><br><input type='radio' name='appetizerItal' value='No appetizer.' id='no' /><label for='no' class='app' id='no'>No thank you!</label>" //<input id='submit' type='submit' value='submit' /></form>"
    // var noThankYou = "<div class='form-check'><input class='form-check-input' type='radio' name='bread' id='exampleRadios1' value='no bread'><label class='form-check-label' for='exampleRadios1'>No, thank you.</label></div>"
    $(italianSelect).appendTo('#italian-appetizer');
    $(query).appendTo('#italian-appetizer');
    $(radioButtonItl).appendTo('#italian-appetizer');

    $("input[type='radio']").click(function () {
        $("#yes").css("background-color", "coral");
        var radioValue = $("input[name='appetizerItal']:checked").val();
        if (radioValue) {
            resRestaurant = "Risterante Italiano";
            resAppetizer = radioValue;
        }
        console.log("You Selected " + resRestaurant);
        console.log(resAppetizer);
        $("#italian-appetizer").text("You selected " + resRestaurant + " \nwith " + resAppetizer);
    });

});

//AMERICAN
$('#american').on('click', function () {
    var americanSelect = "<h4 style='font-weight:bold;'>Burgers 'N' Bases</h4>"
    var query = "<h5 style='color: coral;'>Would you like to add an appetizer? (30% SeatYourself Discount!)</h5>"
    var radioButtonAmr = "<form id='appetizerMex' action='/'><input type='radio' name='appetizerAmer' value='Caesar Salad Spears' id='salad' /><label for='salad' class='app'>Caesar Salad Spears $5.99</label><br><input type='radio' name='appetizerAmer' value='No appetizer.' id='no' /><label for='no' class='app' id='no'>No thank you!</label>" //<input id='submit' type='submit' value='submit' /></form>"
    // var noThankYou = "<div class='form-check'><input class='form-check-input' type='radio' name='salad' id='exampleRadios1' value='no salad'><label class='form-check-label' for='exampleRadios1'>No, thank you.</label></div>"
    $(americanSelect).appendTo('#american-appetizer');
    $(query).appendTo('#american-appetizer');
    $(radioButtonAmr).appendTo('#american-appetizer');

    $("input[type='radio']").click(function () {
        $("#yes").css("background-color", "coral");
        var radioValue = $("input[name='appetizerAmer']:checked").val();
        if (radioValue) {
            resRestaurant = "Burgers 'N' Bases";
            resAppetizer = radioValue;
        }
        console.log(resRestaurant);
        console.log(resAppetizer);
        $("#american-appetizer").text("You selected " + resRestaurant + " \nwith " + resAppetizer);
    });

});

//CHINESE
$('#chinese').on('click', function () {
    var chineseSelect = "<h4 style='font-weight:bold;'>China Happy Food</h4>"
    var query = "<h5 style='color: coral;'>Would you like to add an appetizer? (30% SeatYourself Discount!)</h5>"
    var radioButtonChi = "<form id='appetizerMex' action='/'><input type='radio' name='appetizerChi' value='dumplings' id='Fried Vegetable Dumplings' /><label for='dumplings' class='app'>Fried Vegetable Dumplings $5.99</label><br><input type='radio' name='appetizerChi' value='No appetizer.' id='no' /><label for='no' class='app' id='no'>No thank you!</label>" //<input id='submit' type='submit' value='submit' /></form>"
    // var noThankYou = "<div class='form-check'><input class='form-check-input' type='radio' name='dumplings' id='exampleRadios1' value='no dumplings'><label class='form-check-label' for='exampleRadios1'>No, thank you.</label></div>"
    $(chineseSelect).appendTo('#chinese-appetizer');
    $(query).appendTo('#chinese-appetizer');
    $(radioButtonChi).appendTo('#chinese-appetizer');

    $("input[type='radio']").click(function () {
        $("#yes").css("background-color", "coral");
        var radioValue = $("input[name='appetizerChi']:checked").val();
        if (radioValue) {
            resRestaurant = "China Happy Food";
            resAppetizer = radioValue;
        }
        console.log(resRestaurant);
        console.log(resAppetizer);
        $("#chinese-appetizer").text("You selected " + resRestaurant + " \nwith " + resAppetizer);
    });

});

//BREWERY
$('#brewery').on('click', function () {
    var brewerySelect = "<h4 style='font-weight:bold;'>Brew-U</h4>"
    var query = "<h5 style='color: coral;'>Would you like to add an appetizer? (30% SeatYourself Discount!)</h5>"
    var radioButtonBrew = "<form id='appetizerMex' action='/'><input type='radio' name='appetizerBrew' value='Brown Ale Caramel Corn with Pretzels & Pecans' id='popcorn' /><label for='popcorn' class='app'> Brown Ale Caramel Corn with Pretzels & Pecans $5.99</label><br><input type='radio' name='appetizerBrew' value='No appetizer.' id='no' /><label for='no' class='app' id='no'>No thank you!</label>" //<input id='submit' type='submit' value='submit' /></form>"
    // var noThankYou = "<div class='form-check'><input class='form-check-input' type='radio' name='corn' id='exampleRadios1' value='No Brown Ale Caramel Corn with Pretzels & Pecans'><label class='form-check-label' for='exampleRadios1'>No, thank you.</label></div>"
    $(brewerySelect).appendTo('#brewery-appetizer');
    $(query).appendTo('#brewery-appetizer');
    $(radioButtonBrew).appendTo('#brewery-appetizer');

    $("input[type='radio']").click(function () {
        $("#yes").css("background-color", "coral");
        $("#no").css("color", "coral");
        var radioValue = $("input[name='appetizerBrew']:checked").val();
        if (radioValue) {

            resRestaurant = "Brew-U";
            resAppetizer = radioValue;
        }
        console.log(resRestaurant);
        console.log(resAppetizer);
        $("#brewery-appetizer").text("You selected " + resRestaurant + " with " + resAppetizer);
    });

});

//**  TIME SELECT **//
//____________________________________________________________//

//5:30 PM
$('#time-530').on('click', function () {
    var timeSelect = "<h4 style='font-weight:bold;'>5:30 PM</h4>"
    selected = true;
    $(timeSelect).appendTo('#530');
    if (selected) {
        resTime = "530";
    };
    console.log(resTime);
});

//6:00 PM
$('#time-600').on('click', function () {
    var timeSelect = "<h4 style='font-weight:bold;'>6:00 PM</h4>";
    selected = true;
    $(timeSelect).appendTo('#600');
    if (selected) {
        resTime = "600";
    };
    console.log(resTime);
});

//6:30 PM
$('#time-630').on('click', function () {
    var timeSelect = "<h4 style='font-weight:bold;'>6:30 PM</h4>";
    selected = true;
    $(timeSelect).appendTo('#630');
    if (selected) {
        resTime = "630";
    };
    console.log(resTime);
});

//7:00 PM
$('#time-700').on('click', function () {
    var timeSelect = "<h4 style='font-weight:bold;'>7:00 PM</h4>"
    selected = true;
    $(timeSelect).appendTo('#700');
    if (selected) {
        resTime = "700";
    };
    console.log(resTime);
});

//7:30 PM
$('#time-730').on('click', function () {
    var timeSelect = "<h4 style='font-weight:bold;'>7:30 PM</h4>";
    selected = true;
    $(timeSelect).appendTo('#730');
    if (selected) {
        resTime = "730";
    };
    console.log(resTime);
});

//8:00 PM
$('#time-800').on('click', function () {
    var timeSelect = "<h4 style='font-weight:bold;'>8:00 PM</h4>";
    selected = true;
    $(timeSelect).appendTo('#800');
    if (selected) {
        resTime = "800";
    };
    console.log(resTime);
});


//**  PARTY SIZE SELECT **//
//____________________________________________________________//

//TWO
$('#party-two').on('click', function () {
    selected = true;
    var partySizeSelect = "<h4 style='font-weight:bold;'>Two</h4>"
    console.log("party of 2");
    $(partySizeSelect).appendTo('#two-top');
    if (selected) {
        resGuests = 2;
    };
    console.log(resGuests);
});

//FOUR
$('#party-four').on('click', function () {
    selected = true;
    console.log("party of 4");
    var partySizeSelect = "<h4 style='font-weight:bold;'>Four</h4>"
    $(partySizeSelect).appendTo('#four-top');
    if (selected) {
        resGuests = 4;
    };
    console.log(resGuests);
});

//SIX
$('#party-six').on('click', function () {
    selected = true;
    console.log("party of 6");
    var partySizeSelect = "<h4 style='font-weight:bold;'>Six</h4>"
    $(partySizeSelect).appendTo('#six-top');
    if (selected) {
        resGuests = 6;
    };
    console.log(resGuests);
});

//EIGHT
$('#party-eight').on('click', function () {
    selected = true;
    console.log("party of 8");
    var partySizeSelect = "<h4 style='font-weight:bold;'>Eight</h4>"
    $(partySizeSelect).appendTo('#eight-top');
    if (selected) {
        resGuests = 8;
    };
    console.log(resGuests);
});
//___________ENTER PHONE NUMBER________________///

$("#submit").click(function () {
    var submit = $("input[type='tel']").val(); //NEED TO GET A CODE TO VALIDATE THE PHONE #
    var confirmation = confirm("Is this number correct? " + submit);
    if (confirmation === true) {
        resMobile = submit;
    } else {
        alert("Please enter a valid number!");

    }
    console.log(resMobile);
});

// ----- WHEN USER MAKES RESERVATION ----- //

$("#check-avail").on("click", function (event) {
    event.preventDefault();
    
    // ----- TURNS RESERVATION INTO AN OBJECT ----- //
    var newReservation = {
        restaurant: resRestaurant,
        mobile: resMobile,
        appetizer: resAppetizer,
        time: resTime,
        guests: resGuests
         
    };
    console.log(newReservation);
    
   

    // ----- AJAX POST REQUEST WITH JQUERY UPDATED 11/27/18 930PM----- //
   
    $.post("/connection", newReservation)//was new
        .then(function () {
            var row = $("<div");
            row.addClass("res");
            row.append("<p>" + newReservation.restaurant + "</p>");
            row.append("<p>" + newReservation.mobile + "</p>");
            row.append("<p>" + newReservation.appetizer + "</p>");
            row.append("<p>" + newReservation.time + "</p>");
            row.append("<p>" + newReservation.guests + "</p>");
            
            $("#res-area").prepend(row);
             
        });

});
});

  