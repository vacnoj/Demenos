$(function() {

    let string = "Welcome to Deménos Airlines where our purpose is to tether you with the people or places that matter most. Our vision is to be the quickest, most comfortable, and most efficient airlines possible. We promise to provide a friendly, diverse, and secure environment; as well as offer the best rates and amenities to our loyal members and customers. People from all walks of life can expect Integrity, Excellence, Efficiency, and Care at not only our ticket counters and flights but also our new Deménos Airlines app. In this app customers will be able to purchase flights, search for flights, or check flights statuses. As well as compare and contrast our ticket rates with our competitors. Customers can even get in contact with our dedicated Customer Service line through the app. Flight cancellations are offered for customers on specific flights but always available for members any day prior to your flight date."

    stirng = string.split('')

    let length = string.length;

    let index = 0;

    console.log(length);
    
    let typing;

    if (!localStorage.getItem("intro")) {
        $('#intro').empty();

        function typeIntro(length, index) {
            if (index < length) {
                $('#intro').append(string[index])
            }
            else clearInterval(typing);
            localStorage.setItem("intro", true);
        }
        
        setTimeout(function() {
            typing = setInterval(function() {
                typeIntro(length, index)
                index++;
            }, 50);
        }, 1000);

    } 

    $('#intro').click(function() {
        clearInterval(typing);
        $('#intro').empty();
        $('#intro').text(string);
        localStorage.setItem("intro", true);
    })

    $('#blabla').click(function(){localStorage.clear("intro")})
});