$(document).ready(function () {

    console.log('running script.js');

    if (localStorage.getItem("user")) {
        let user = JSON.parse(localStorage.getItem("user"))
        console.log(user)
        $('.user_greeting').text(`Welcome, ${user.first_name}`);
    }

    $('.MenuBarHorizontal').on('click', '.signOut', function() {
        console.log("User signed out");
        localStorage.clear("user")
        location.reload();
    })
    
    function Customer(first_name, last_name, birthday, card_number, card_expiration_date, cvv, name_on_card) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.birthday = birthday;
        this.card_number = card_number;
        this.card_expiration_date = card_expiration_date;
        this.cvv = cvv;
        this.name_on_card = name_on_card;
    }

    function Trip(departing_state, departing_airport_code, departure_date, arriving_state, arriving_airport_code, arrival_date, trip_type) {
        this.departing_state = departing_state;
        this.departing_airport_code = departing_airport_code;
        this.departure_date = departure_date;
        this.arriving_state = arriving_state;
        this.arriving_airport_code = arriving_airport_code;
        this.arrival_date = arrival_date;
        this.trip_type = trip_type;

    }

    if (localStorage.getItem("user")) {
        $('#MenuBar1').empty();
        $('#MenuBar1').append(
            `
            <li><a href="/">Home</a></li>
            <li><a href="flights">Flights</a></li>
            <li><a href="#Check">Check-In</a></li>
            <li><a href="#Status">Flight Status</a></li>
            <li><a class="signOut">Sign Out</a></li>
            `
        )
        $('#MenuBar2').empty();
        $('#MenuBar2').append(
            `
            <li><a href="/">Home</a></li>
            <li><a href="flights">Flights</a></li>
            <li><a href="#Check">Check-In</a></li>
            <li><a href="#Status">Flight Status</a></li>
            <li><a class="signOut">Sign Out</a></li>
            `
        )
    } else {
        $('#MenuBar1').empty();
        $('#MenuBar1').append(
            `
            <li><a href="/">Home</a></li>
            <li><a href="flights">Flights</a></li>
            <li><a href="#Check">Check-In</a></li>
            <li><a href="#Status">Flight Status</a></li>
            <li><a href="login">Sign/Log-In</a></li>
            `
        )

        $('#MenuBar2').empty();
        $('#MenuBar2').append(
            `
            <li><a href="/">Home</a></li>
            <li><a href="flights">Flights</a></li>
            <li><a href="#Check">Check-In</a></li>
            <li><a href="#Status">Flight Status</a></li>
            <li><a href="login">Sign/Log-In</a></li>
            `
        )
    }

    $('#tripSubmit').on('click', function (event) {
        event.preventDefault();

        // validate entries here

        console.log('Form submitted');

        const trip = new Trip(
            $('#DepFrm').val(),
            $('#AirCdeDep').val(),
            $('#Depdate').val(),
            $('#Arriv').val(),
            $('#AirCdeArv').val(),
            $('#ArrivDa').val(),
            $("input[name='tripType']:checked").val()
        )

        console.log(trip);

        location.href = "/payment"

    });

    $('#paymentSubmit').on('click', function (event) {
        event.preventDefault();

        // Validate entries here

        console.log('Form submitted');

        const customer = new Customer(
            $('#firstname').val().trim(),
            $('#lastname').val().trim(),
            $('#birthday').val().trim(),
            $('#cardNum').val().trim(),
            $('#expDate').val().trim(),
            $('#cvv').val().trim(),
            $('#nameOnCard').val().trim()
        )

        console.log(customer);

        $.ajax("/api/customer", {
            type: "POST",
            data: customer
        }).done(function() {
            console.log("Customer created")
        })

    });

    $('#resetPaymentForm').on('click', function() {

        $('#firstname').val(""),
        $('#lastname').val(""),
        $('#birthday').val(""),
        $('#cardNum').val(""),
        $('#expDate').val(""),
        $('#cvv').val(""),
        $('#nameOnCard').val("")

    })
});