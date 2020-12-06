$(function () {

    function NewCustomer(first_name, last_name, email, password, created_date) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
        this.created_date = created_date;
    }

    $('#loginDiv').append(
        // <a class="waves-effect waves-light btn">button</a>
        `<button class='waves-effect waves-light btn' value='login'>Log In</button>
        <button class='waves-effect waves-light btn' value='signup'>Sign Up</button>`
    )

    $('#loginDiv').on('click', 'button', function (e) {
        e.preventDefault();
        let selection = e.target.value;

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

    }

    function signUp() {
        // clear the buttons
        $('#loginDiv').empty();
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
            })
        })
    }

});