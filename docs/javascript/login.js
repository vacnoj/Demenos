$(function () {

    $('.tooltipped').tooltip();
    $('.sidenav').sidenav();

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



    function NewCustomer(first_name, last_name, email, password, created_date) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
        this.created_date = created_date;
    }

    function LoginAttempt(user_email, user_password) {
        this.user_email = user_email;
        this.user_password = user_password;
    }

    $('#loginDiv').append(
        // <a class="waves-effect waves-light btn">button</a>
        `<button class='waves-effect waves-light btn disabled' data-tooltip='Fucntionality coming soon' value='login'>Log In</button>
        <button class='waves-effect waves-light btn' value='signup'>Sign Up</button>`
    )

    $('#loginDiv').on('click', 'button', function (e) {
        e.preventDefault();
        let selection = e.target.value;
        $('.tooltipped').tooltip();

        if (selection === 'login') {
            console.log('Beginning login sequence')
            login();
        }
        else if (selection === 'signup') {
            console.log('Beginning signup sequence')
            signUp();
        }

    });

    function login() {
        // clear the buttons
        $('#loginDiv').empty();
        // Warn about password
        alert("This website is for academic purposes. Please do not put any personal info including passwords as they are not secure")
        // append form to loginDiv
        $('#loginDiv').append(
            `<div class="row">
                <form class="col s12">
                    <div class="row">
                        <div class="input-field col s6 offset-s3">
                            <input id="userEmail" type="email" class="validate">
                            <label for="email">Email</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s6 offset-s3">
                            <input id="userPassword" type="password" class="validate">
                            <label for="password">Password</label>
                        </div>
                    </div>
                    <button class="btn waves-effect waves-light" id="submitLoginForm" type="submit" name="submitLogin">Log In
                        <i class="material-icons right">send</i>
                    </button>
                </form>
            </div>`
        )
        // send to database on submit form
        $('#submitLoginForm').on('click', function() {
            // create login attempt object
            let loginAttempt = new LoginAttempt(
                $('#userEmail').val().trim(),
                $('#userPassword').val().trim(),
            )
            console.log(loginAttempt)
            $.ajax('/api/login',{
                type: 'POST',
                data: loginAttempt
            }).done(function(result) {

                if (result.length > 0) {
                    console.log("Login Accepted");
                    console.log('Welcome, ' + result[0].first_name)
                    loginValid = true;
                    currentUser = result[0];
                    location.href = '/'
                }

            })
        })
    }

    function signUp() {
        // clear the buttons
        $('#loginDiv').empty();
        // Clear user out of local storage
        localStorage.clear("user")
        // Warn about password
        alert("This website is for academic purposes. Please do not put any personal info including passwords as they are not secure")
        // append form to loginDiv
        $('#loginDiv').append(
            `<div class="row">
                <form class="col s12">
                    <div class="row">
                        <div class="input-field col s6">
                            <input id="first_name" type="text" class="validate">
                            <label for="first_name">First Name</label>
                        </div>
                        <div class="input-field col s6">
                            <input id="last_name" type="text" class="validate">
                            <label for="last_name">Last Name</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="newEmail" type="email" class="validate">
                            <label for="email">Email</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="newPassword" type="password" class="validate">
                            <label for="password">New Password</label>
                        </div>
                    </div>
                    <button class="btn waves-effect waves-light" id="submitSignUpForm" type="submit" name="submitSignUp">Sign Up
                        <i class="material-icons right">send</i>
                    </button>
                </form>
            </div>`
        )
        // send to database on submit form
        $('#submitSignUpForm').on('click', function() {
            // create customer object
            let now = new Date()
            let newCustomer = new NewCustomer(
                $('#first_name').val().trim(),
                $('#last_name').val().trim(),
                $('#newEmail').val().trim(),
                $('#newPassword').val().trim(),
                now
            )
            console.log(newCustomer)
            $.ajax('/api/add_customer',{
                type: 'POST',
                data: newCustomer
            }).done(function() {
                console.log("New Customer created");
                localStorage.setItem("user", JSON.stringify(newCustomer))
                location.href = '/'
            })
        })
    }

});