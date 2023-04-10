function check_password() {
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;


    if (password1.length < 8) {
        alert("First Password is too short, try again.")
    } else if (password2.length < 8) {
        alert("Second Password is too short, try again.")
    } else if (password1 != password2) {
        alert("Passwords do not match, try again.")
    } else {
        alert("Passwords match.")
    }
}