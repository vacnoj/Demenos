$(document).ready(function () {

    console.log('running script.js');


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

    $('#tripSubmit').on('click', function (event) {
        event.preventDefault();

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

    });

    $('#paymentSubmit').on('click', function (event) {
        event.preventDefault();

        console.log('Form submitted');

        const customer = new Customer(
            $('#firstname').val(),
            $('#lastname').val(),
            $('#birthday').val(),
            $('#CrdNum').val(),
            $('#Exdate').val(),
            $('#cardNum').val(),
            $('#expDate').val(),
            $('#cvv').val(),
            $('#nameOnCard').val()
        )

        console.log(customer);

    });

});